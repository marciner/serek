import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';//firebase
import { LOCALE_ID } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';


import { AuthService } from './services/auth.service';
import { KayakService } from './services/kayaks.service';
import { RoutesService } from './services/routes.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component'
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { KayaksPageComponent } from './kayaks-page/kayaks-page.component';
import { RoutesPageComponent } from './routes-page/routes-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component'

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


import { SharedService } from './services/shared.service';
import { UsersService } from './services/users.service';
import { OrdersService } from './services/orders.service';
import { UploadService } from './services/upload.service';

import { RoutesModalComponent } from './modals/routes-modal/routes-modal.component';
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { KayaksModalComponent } from './modals/kayaks-modal/kayaks-modal.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchPipe } from './services/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { CalendarComponent } from './calendar/calendar.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

import{ KeyPipe } from './pipes/key.pipe';
import{ SortPipe } from './pipes/sort-by.pipe';
import { OrdersInDayComponent } from './orders/orders-in-day/orders-in-day.component';

import { ChartsModule } from 'ng2-charts';
import { VeryImportantReportComponent } from './reports-page/very-important-report/very-important-report.component';
import { EarnedMoneyChartComponent } from './reports-page/earned-money-chart/earned-money-chart.component';
import { NewUsersChartComponent } from './reports-page/new-users-chart/new-users-chart.component';
import { OrdersChartComponent } from './reports-page/orders-chart/orders-chart.component';
import { KayaksChartComponent } from './reports-page/kayaks-chart/kayaks-chart.component';
import { UserStatsComponent } from './reports-page/user-stats/user-stats.component';
import { CountoModule }  from 'angular2-counto';
import { KmOnKayakComponent } from './reports-page/user-stats/km-on-kayak/km-on-kayak.component';
import { HOnKayakComponent } from './reports-page/user-stats/h-on-kayak/h-on-kayak.component';
import { CurrentUserOrdersComponent } from './orders-page/current-user-orders/current-user-orders.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MobileHamburgerButtonComponent } from './ui/mobile-hamburger-button/mobile-hamburger-button.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { OrdersManualComponent } from './home-page/orders-manual/orders-manual.component';
import { ReportsManualComponent } from './home-page/reports-manual/reports-manual.component';
import { KayaksManualComponent } from './home-page/kayaks-manual/kayaks-manual.component';
import { RoutesManualComponent } from './home-page/routes-manual/routes-manual.component';
import { UsersManualComponent } from './home-page/users-manual/users-manual.component';
import { ForgotPasswordModalComponent } from './modals/forgot-password-modal/forgot-password-modal.component';



import { SelectModule } from 'ng2-select';







export const firebaseConfig = {//firebase
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegistrationPageComponent },
    { path: 'orders', component: OrdersPageComponent },
    { path: 'reports', component: ReportsPageComponent },
    { path: 'kayaks', component: KayaksPageComponent },
    { path: 'routes', component: RoutesPageComponent },
    { path: 'users', component: UsersPageComponent },
    { path: 'user-details', component: UserDetailsComponent },
    { path: 'user/:id', component: UserDetailsComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ReportsPageComponent,
    KayaksPageComponent,
    RoutesPageComponent,
    UsersPageComponent,
    OrdersPageComponent,
    RoutesModalComponent,
    InfoModalComponent,
    ErrorModalComponent,
    KayaksModalComponent,
    CurrentUserComponent,
    UsersListComponent,
    UserDetailsComponent,
    SearchPipe,
    CalendarComponent,
    NewOrderComponent,
    AllOrdersComponent,
    KeyPipe, 
    SortPipe, OrdersInDayComponent, VeryImportantReportComponent, EarnedMoneyChartComponent, NewUsersChartComponent, OrdersChartComponent, KayaksChartComponent, UserStatsComponent, KmOnKayakComponent, HOnKayakComponent, CurrentUserOrdersComponent, LoadingSpinnerComponent, MobileHamburgerButtonComponent, SidebarComponent, OrdersManualComponent, ReportsManualComponent, KayaksManualComponent, RoutesManualComponent, UsersManualComponent, ForgotPasswordModalComponent

    



    //TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),//firebase
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    NgxPaginationModule,
    ChartsModule,
    CountoModule,
    SelectModule 


   
   


  ],
  providers: [AuthService, KayakService, RoutesService ,
    SharedService, UsersService, OrdersService, UploadService, 
    {provide: LOCALE_ID, useValue: "pl-PL"}],
  bootstrap: [AppComponent],
  entryComponents: [ RoutesModalComponent ]
})
export class AppModule { }
