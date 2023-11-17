/* eslint-disable @typescript-eslint/naming-convention */
import { Pending, Recurring, Scheduled, Subcontracted, Unassigned } from './fares.definitions';
import { Entity, Regular } from './domain.definitions';

type Commands =
  | 'add-recurring'
  | 'allocate-unassigned'
  | 'delete-fare'
  | 'delete-regular'
  | 'edit-regular'
  | 'edit-scheduled'
  | 'register-regular'
  | 'schedule-pending'
  | 'schedule-scheduled'
  | 'schedule-unassigned'
  | 'subcontract-fare';

type CommandMappings = {
  'add-recurring': AddRecurring;
  'allocate-unassigned': AllocateUnassigned;
  'delete-fare': DeleteFare;
  'delete-regular': DeleteRegular;
  'edit-regular': EditRegular;
  'edit-scheduled': EditScheduled;
  'register-regular': RegisterRegular;
  'schedule-pending': SchedulePending;
  'schedule-scheduled': ScheduleScheduled;
  'schedule-unassigned': ScheduleUnassigned;
  'subcontract-fare': SubcontractFare;
};

export type CommandsResult<T extends Commands> = CommandMappings[T];

export type ScheduleScheduled = {
  scheduledCreated: Entity & Scheduled;
  pendingCreated: (Entity & Pending) | undefined;
};

export type AddRecurring = {
  recurringCreated: Entity & Recurring;
};

export type AllocateUnassigned = {
  unassignedCreated: Entity & Unassigned;
};

export type EditScheduled = {
  scheduledEdited: Entity & Scheduled;
  pendingCreated: (Entity & Pending) | undefined;
  pendingDeleted: (Entity & Pending) | undefined;
};

export type SubcontractFare = {
  subcontracted: Entity & Subcontracted;
  scheduledDeleted: (Entity & Scheduled) | undefined;
  pendingDeleted: (Entity & Pending) | undefined;
};

export type DeleteFare = {
  scheduledDeleted: (Entity & Scheduled) | undefined;
  pendingDeleted: (Entity & Pending) | undefined;
  unassignedDeleted: (Entity & Unassigned) | undefined;
};

export type EditRegular = {
  regularEdited: Entity & Regular;
};

export type DeleteRegular = {
  regularDeleted: Entity & Regular;
};

export type SchedulePending = {
  scheduledCreated: Entity & Scheduled;
  pendingDeleted: Entity & Pending;
};

export type ScheduleUnassigned = {
  scheduledCreated: Entity & Scheduled;
  pendingCreated: (Entity & Pending) | undefined;
  unassignedDeleted: Entity & Unassigned;
};

export type RegisterRegular = {
  regularRegistered: Entity & Regular;
};

type Queries = 'regular-history';

type QueriesMappings = {
  'regular-history': RegularHistory;
};

export type QueriesResult<T extends Queries> = QueriesMappings[T];

export type RegularHistory = {
  scheduled: (Entity & Scheduled)[];
  pending: (Entity & Pending)[];
  unassigned: (Entity & Unassigned)[];
  subcontracted: (Entity & Subcontracted)[];
};
