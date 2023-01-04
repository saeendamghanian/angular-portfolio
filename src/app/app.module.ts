import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { EducationComponent } from './components/home/education/education.component';
import { FeatureComponent } from './components/home/feature/feature.component';
import { PortfolioComponent } from './components/home/portfolio/portfolio.component';
import { ContactComponent } from './components/home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    FeatureComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
