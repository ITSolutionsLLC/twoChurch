// Core Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phoneNumber?: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  PASTOR = 'PASTOR',
  LEADER = 'LEADER',
  MEMBER = 'MEMBER',
  VISITOR = 'VISITOR',
}

export interface Member extends User {
  membershipDate: Date;
  birthDate?: Date;
  address?: Address;
  familyId?: string;
  groups?: string[];
  isActive: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  eventType: EventType;
  organizerId: string;
  attendees?: string[];
  maxCapacity?: number;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum EventType {
  SERVICE = 'SERVICE',
  PRAYER = 'PRAYER',
  BIBLE_STUDY = 'BIBLE_STUDY',
  YOUTH = 'YOUTH',
  CHILDREN = 'CHILDREN',
  CONFERENCE = 'CONFERENCE',
  OUTREACH = 'OUTREACH',
  OTHER = 'OTHER',
}

export interface Donation {
  id: string;
  amount: number;
  currency: string;
  donorId: string;
  donationType: DonationType;
  paymentMethod: PaymentMethod;
  status: DonationStatus;
  notes?: string;
  createdAt: Date;
  processedAt?: Date;
}

export enum DonationType {
  TITHE = 'TITHE',
  OFFERING = 'OFFERING',
  SPECIAL = 'SPECIAL',
  BUILDING_FUND = 'BUILDING_FUND',
  MISSIONS = 'MISSIONS',
  OTHER = 'OTHER',
}

export enum PaymentMethod {
  CASH = 'CASH',
  CHECK = 'CHECK',
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  MOBILE_PAYMENT = 'MOBILE_PAYMENT',
}

export enum DonationStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export interface Group {
  id: string;
  name: string;
  description: string;
  leaderId: string;
  members: string[];
  meetingSchedule?: string;
  location?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sermon {
  id: string;
  title: string;
  description: string;
  preacherId: string;
  date: Date;
  scripture?: string;
  videoUrl?: string;
  audioUrl?: string;
  notesUrl?: string;
  series?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}
