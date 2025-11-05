import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';

export interface AuthResponse {
  token: string,
  expiration: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = "https://localhost:7189/api";
  private curentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$ = this.curentUserSubject.asObservable();


  constructor(private http:HttpClient,private toastr: ToastrService){
    const token = localStorage.getItem('token');
    if (token){
      this.curentUserSubject.next(token);
    }
  }

  register(formData: any){
    return this.http.post<AuthResponse>(this.baseUrl + '/register', formData)
    .pipe(tap((res)=>{
      localStorage.setItem('token', res.token);
      this.curentUserSubject.next(res.token);
    }));
    
  }

  login(formData: any) : Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.baseUrl + '/login', formData)
    .pipe(tap((res) =>{
      localStorage.setItem('token', res.token);
      this.curentUserSubject.next(res.token);
    }),
    catchError(err => {
      console.error('Login error response:', err); 
      this.toastr.error(err.error?.message || 'Login failed');
      return throwError(() => err);
    })
  );
}
  logout(){
    localStorage.removeItem('token');
    this.curentUserSubject.next(null);
  }
  isAuthenticated$ = this.currentUser$.pipe(map(token => !!token));

  get token() : string | null{
    return localStorage.getItem('token');
  }

}
