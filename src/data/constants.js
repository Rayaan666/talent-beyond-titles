import { Users, Building2, Trophy, Globe } from 'lucide-react';

export const HERO_NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Categories', href: '#categories' },
  { label: 'Partners', href: '#partners' },
  { label: 'How It Works', href: '#journey' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { value: '50K+', label: 'Participants', icon: Users },
  { value: '1200+', label: 'Companies', icon: Building2 },
  { value: '15+', label: 'Talent Categories', icon: Trophy },
  { value: '20+', label: 'Countries', icon: Globe },
];

export const TALENT_PANELS = [
  {
    id: 1,
    title: 'Guitarist',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800',
    depth: 0.8,
  },
  {
    id: 2,
    title: 'Singer',
    img: 'https://images.unsplash.com/photo-1516280440502-a2fc8c62c2f4?auto=format&fit=crop&q=80&w=800',
    depth: 1.2,
  },
  {
    id: 3,
    title: 'Pianist',
    img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800',
    depth: 1.0,
  },
  {
    id: 4,
    title: 'Dancer',
    img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
    depth: 1.5,
  },
  {
    id: 5,
    title: 'Contemporary',
    img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80&w=800',
    depth: 0.9,
  },
];

export const COUNTDOWN_DEADLINE = '2025-12-10T20:00:00';
