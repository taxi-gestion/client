import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecurringPage, EditScheduledPage, ScheduleFarePage, SchedulePendingPage } from '../pages';
import { ManageFareLayout } from '../layouts';
import { redirectWithDate } from '../guards/redirect-with-date.guard';
import { setDate } from '../guards/set-date.guard';
import { ScheduleUnassignedPage } from '../pages/schedule-unassigned/schedule-unassigned.page';
import { ManageRecurrenceLayout } from '../layouts/manage-recurrence/manage-recurrence.layout';
import { EditRecurringPage } from '../pages/edit-recurring/edit-recurring.page';
import { PlanWithContextPage } from '../pages/plan-with-context/plan-with-context.page';
import { SubcontractedPage } from '../pages/subcontracted-fares/subcontracted-fares.page';

const ROUTES: Routes = [
  {
    path: '',
    component: ManageFareLayout
  },
  {
    path: 'plan',
    component: PlanWithContextPage
  },
  {
    path: 'edit',
    canActivate: [redirectWithDate],
    component: EditScheduledPage
  },
  {
    path: 'pendings',
    canActivate: [redirectWithDate],
    component: SchedulePendingPage
  },
  {
    path: 'schedule',
    canActivate: [redirectWithDate],
    component: ScheduleFarePage
  },
  {
    path: 'unassigned',
    canActivate: [redirectWithDate],
    component: ScheduleUnassignedPage
  },
  {
    path: 'subcontracted',
    canActivate: [redirectWithDate],
    component: SubcontractedPage
  },
  {
    path: 'edit/:date',
    canActivate: [setDate],
    component: EditScheduledPage
  },
  {
    path: 'pendings/:date',
    canActivate: [setDate],
    component: SchedulePendingPage
  },
  {
    path: 'schedule/:date',
    canActivate: [setDate],
    component: ScheduleFarePage
  },
  {
    path: 'unassigned/:date',
    canActivate: [setDate],
    component: ScheduleUnassignedPage
  },
  {
    path: 'subcontracted/:date',
    canActivate: [setDate],
    component: SubcontractedPage
  },
  {
    path: 'edit/:date/:id',
    canActivate: [setDate],
    component: EditScheduledPage
  },
  {
    path: 'pendings/:date/:id',
    canActivate: [setDate],
    component: SchedulePendingPage
  },
  {
    path: 'unassigned/:date/:id',
    canActivate: [setDate],
    component: ScheduleUnassignedPage
  },
  {
    path: 'recurring',
    component: ManageRecurrenceLayout
  },
  {
    path: 'recurring/add',
    component: AddRecurringPage
  },
  {
    path: 'recurring/edit',
    component: EditRecurringPage
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(ROUTES)]
})
export class FareFeatureRoutingModule {}
