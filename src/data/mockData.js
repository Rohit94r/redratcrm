export const INITIAL_LEADS_OVERVIEW = [
  { id: 'total', label: 'TOTAL LEADS', count: 128, sub: '48 Housing · 36 Meta · Lead Overview = 163', color: '#2563EB', bg: 'rgba(37,99,235,0.08)', icon: 'Users' },
  { id: 'new', label: 'NEW TODAY', count: 4, sub: "Today's unassigned · subset of Open Leads", color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', icon: 'Zap' },
  { id: 'open', label: 'OPEN LEADS', count: 24, sub: 'Unassigned or fresh assigned · part of Total', color: '#6366F1', bg: 'rgba(99,102,241,0.08)', icon: 'Inbox' },
  { id: 'missed', label: 'MISSED LEADS', count: 8, sub: 'Assigned 24h+ with no action · exclusive', color: '#EF4444', bg: 'rgba(239,68,68,0.08)', icon: 'AlertCircle' },
  { id: 'positive', label: 'POSITIVE LEADS', count: 40, sub: 'Hot / positive only · exclusive', color: '#10B981', bg: 'rgba(16,185,129,0.08)', icon: 'TrendingUp' },
  { id: 'cold', label: 'COLD LEADS', count: 17, sub: 'Positive → Cold Lead · exclusive', color: '#06B6D4', bg: 'rgba(6,182,212,0.08)', icon: 'Snowflake' },
  { id: 'ringing', label: 'RINGING', count: 8, sub: 'Exclusive status · part of Total', color: '#F97316', bg: 'rgba(249,115,22,0.08)', icon: 'PhoneCall' },
  { id: 'not_interested', label: 'NOT INTERESTED', count: 10, sub: 'Exclusive status · part of Total', color: '#EC4899', bg: 'rgba(236,72,153,0.08)', icon: 'MinusCircle' },
  { id: 'visited', label: 'VISITED', count: 15, sub: 'Exclusive stage · part of Total', color: '#14B8A6', bg: 'rgba(20,184,166,0.08)', icon: 'MapPin' },
  { id: 'follow_ups', label: 'FOLLOW UPS', count: 41, sub: '41 pending · exclusive', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', icon: 'Calendar' }
];

export const INITIAL_BOOKING_OVERVIEW = [
  { id: 'bookings', label: 'BOOKINGS', count: 6, sub: 'Booking records in system · not in Total Leads', color: '#F97316', bg: 'rgba(249,115,22,0.08)', icon: 'FileText' },
  { id: 'registration', label: 'REGISTRATION', count: 7, sub: 'Booking department · not in Total Leads', color: '#06B6D4', bg: 'rgba(6,182,212,0.08)', icon: 'Award' },
  { id: 'login_file', label: 'LOGIN FILE', count: 4, sub: 'Booking pipeline · tap to open', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)', icon: 'Folder' },
  { id: 'sanctioned', label: 'SANCTIONED', count: 3, sub: 'Booking pipeline · tap to open', color: '#10B981', bg: 'rgba(16,185,129,0.08)', icon: 'CheckCheck' },
  { id: 'disbursement', label: 'DISBURSEMENT', count: 2, sub: 'Booking pipeline · tap to open', color: '#059669', bg: 'rgba(5,150,105,0.08)', icon: 'BadgeDollarSign' },
  { id: 'bill_submitted', label: 'BILL SUBMITTED', count: 2, sub: 'Booking pipeline · tap to open', color: '#D97706', bg: 'rgba(217,119,6,0.08)', icon: 'Receipt' },
  { id: 'amt_received', label: 'AMT RECEIVED', count: 2, sub: 'Booking pipeline · tap to open', color: '#0D9488', bg: 'rgba(13,148,136,0.08)', icon: 'Wallet' }
];

export const UPCOMING_FOLLOW_UPS = [
  { id: 'f1', date: '2026-11-09', client: 'Meera Nair', agent: 'Amit Patil', time: 'Monday · 9:09 AM', status: 'Site Visit', phone: '+91 98201 44521' },
  { id: 'f2', date: '2026-11-07', client: 'Mahesh Shetty', agent: 'Priya Desai', time: 'Saturday · 3:09 PM', status: 'Budget Discussion', phone: '+91 98192 33412' },
  { id: 'f3', date: '2026-11-09', client: 'Neha Gowda', agent: 'Sneha Kulkarni', time: 'Monday · 9:09 AM', status: 'Floor Plan Review', phone: '+91 97693 88102' },
  { id: 'f4', date: '2026-11-07', client: 'Sanjay Khan', agent: 'Priya Desai', time: 'Saturday · 3:09 PM', status: 'Price Negotiation', phone: '+91 98334 11209' },
  { id: 'f5', date: '2026-11-09', client: 'Arti Shaikh', agent: 'Amit Patil', time: 'Monday · 9:09 AM', status: 'Payment Terms', phone: '+91 99205 77164' },
  { id: 'f6', date: '2026-11-09', client: 'Ritu Kamble', agent: 'Sneha Kulkarni', time: 'Monday · 9:09 AM', status: 'KYC Document Collection', phone: '+91 98211 44023' },
  { id: 'f7', date: '2026-11-07', client: 'Prakash Borde', agent: 'Priya Desai', time: 'Saturday · 3:09 PM', status: 'Sample Flat Walkthrough', phone: '+91 98920 66318' },
  { id: 'f8', date: '2026-11-09', client: 'Divya Lad', agent: 'Amit Patil', time: 'Monday · 9:09 AM', status: 'Second Visit with Family', phone: '+91 98204 99120' }
];

export const EMPLOYEES_DATA = [
  {
    id: 'e1',
    name: 'Rajesh Sharma',
    role: 'ADMIN',
    rank: '#1',
    avatar: 'RS',
    totalLeads: 247,
    lastActive: 'Today, 13:39',
    metrics: { missed: 0, hot: 18, cold: 12, siteVisit: 8, visited: 14, notInterested: 2, bookingDone: 6, lowBudget: 4, followUp: 19, dueToday: 5, ringing: 3, todayActivity: 22 }
  },
  {
    id: 'e2',
    name: 'Priya Desai',
    role: 'TELECALLER',
    rank: '#2',
    avatar: 'PD',
    newLeads: 12,
    totalLeads: 45,
    lastActive: 'Today, 12:39',
    metrics: { missed: 1, hot: 9, cold: 4, siteVisit: 5, visited: 6, notInterested: 3, bookingDone: 2, lowBudget: 1, followUp: 12, dueToday: 4, ringing: 4, todayActivity: 14 }
  },
  {
    id: 'e3',
    name: 'Amit Patil',
    role: 'SALES EXECUTIVE',
    rank: '#3',
    avatar: 'AP',
    totalLeads: 38,
    lastActive: 'Today, 11:39',
    metrics: { missed: 0, hot: 11, cold: 3, siteVisit: 7, visited: 12, notInterested: 1, bookingDone: 3, lowBudget: 2, followUp: 8, dueToday: 3, ringing: 2, todayActivity: 18 }
  },
  {
    id: 'e4',
    name: 'Sneha Kulkarni',
    role: 'TELECALLER',
    rank: '#4',
    avatar: 'SK',
    totalLeads: 52,
    lastActive: 'Today, 09:39',
    metrics: { missed: 2, hot: 8, cold: 5, siteVisit: 4, visited: 5, notInterested: 2, bookingDone: 1, lowBudget: 3, followUp: 11, dueToday: 4, ringing: 3, todayActivity: 10 }
  },
  {
    id: 'e5',
    name: 'Vikram Singh',
    role: 'BOOKING TEAM',
    rank: '#5',
    avatar: 'VS',
    totalLeads: 18,
    lastActive: 'Today, 10:39',
    isBooking: true,
    metrics: { loginFile: 4, sanctioned: 3, registration: 7, disbursement: 2, billSubmitted: 2, amtReceived: 2 }
  },
  {
    id: 'e6',
    name: 'Deepika Rao',
    role: 'LOAN OFFICER',
    rank: '#6',
    avatar: 'DR',
    totalLeads: 12,
    lastActive: 'Today, 08:39',
    metrics: { missed: 0, hot: 4, cold: 1, siteVisit: 2, visited: 4, notInterested: 0, bookingDone: 2, lowBudget: 0, followUp: 5, dueToday: 2, ringing: 1, todayActivity: 9 }
  },
  {
    id: 'e7',
    name: 'Nikhil Joshi',
    role: 'MANAGER',
    rank: '#7',
    avatar: 'NJ',
    totalLeads: 29,
    lastActive: 'Today, 13:39',
    metrics: { missed: 1, hot: 6, cold: 2, siteVisit: 3, visited: 6, notInterested: 1, bookingDone: 1, lowBudget: 1, followUp: 7, dueToday: 2, ringing: 2, todayActivity: 11 }
  },
  {
    id: 'e8',
    name: 'Anjali Mehta',
    role: 'MARKETING',
    rank: '#8',
    avatar: 'AM',
    totalLeads: 15,
    lastActive: 'Nov 02, 14:00',
    metrics: { missed: 0, hot: 5, cold: 2, siteVisit: 1, visited: 2, notInterested: 1, bookingDone: 0, lowBudget: 2, followUp: 4, dueToday: 1, ringing: 1, todayActivity: 7 }
  }
];

export const PIPELINE_COLUMNS = [
  {
    id: 'new_lead',
    title: 'New Lead',
    count: 24,
    color: '#6366F1',
    leads: [
      { id: 'nl-1', name: 'Sunita Joshi', config: '2 BHK | 55 - 65 L', location: 'Bandra West', budget: '₹62 L', time: '12m ago', source: 'Housing.com', phone: '+91 98201 11203' },
      { id: 'nl-2', name: 'Karan Kulkarni', config: '3 BHK | 65 - 75 L', location: 'Powai', budget: '₹72 L', time: '1h ago', source: 'Meta Ads', phone: '+91 98192 44901' },
      { id: 'nl-3', name: 'Manish Jadhav', config: '3 BHK | 65 - 75 L', location: 'Naigaon East', budget: '₹68 L', time: '2h ago', source: 'Database', phone: '+91 97691 88310' },
      { id: 'nl-4', name: 'Jyoti Bhosale', config: '1 RK | 75 - 85 L', location: 'Bhayandar West', budget: '₹78 L', time: '3h ago', source: 'Housing.com', phone: '+91 98212 55301' }
    ]
  },
  {
    id: 'assigned',
    title: 'Assigned',
    count: 25,
    color: '#3B82F6',
    leads: [
      { id: 'as-1', name: 'Meera Nair', config: '1 RK | 75 - 85 L', location: 'Juhu', budget: '₹82 L', time: 'Amit Patil', source: 'Meta Ads', phone: '+91 98201 44521' },
      { id: 'as-2', name: 'Suresh Pillai', config: '1 BHK | 85 - 95 L', location: 'Vile Parle', budget: '₹89 L', time: 'Priya Desai', source: 'Housing.com', phone: '+91 98190 22391' },
      { id: 'as-3', name: 'Pooja Reddy', config: '2 BHK | 95 - 105 L', location: 'Kandivali West', budget: '₹98 L', time: 'Sneha Kulkarni', source: 'Database', phone: '+91 97699 11044' },
      { id: 'as-4', name: 'Ritu Kamble', config: '2 BHK | 95 - 105 L', location: 'Andheri West', budget: '₹1.02 Cr', time: 'Amit Patil', source: 'Meta Ads', phone: '+91 98211 44023' }
    ]
  },
  {
    id: 'positive',
    title: 'Positive',
    count: 17,
    color: '#10B981',
    leads: [
      { id: 'pos-1', name: 'Mahesh Shetty', config: '3 BHK | 120 - 130 L', location: 'Dahisar West', budget: '₹1.25 Cr', time: 'Hot Deal', source: 'Housing.com', phone: '+91 98192 33412' },
      { id: 'pos-2', name: 'Neha Gowda', config: '2 BHK | 150 - 160 L', location: 'Andheri East', budget: '₹1.55 Cr', time: 'Site Visit Done', source: 'Meta Ads', phone: '+91 97693 88102' },
      { id: 'pos-3', name: 'Prakash Borde', config: '3 BHK | 200 - 210 L', location: 'Goregaon West', budget: '₹2.05 Cr', time: 'Token Ready', source: 'Database', phone: '+91 98920 66318' },
      { id: 'pos-4', name: 'Divya Lad', config: '1 RK | 250 - 260 L', location: 'Bandra West', budget: '₹2.55 Cr', time: 'Family Agreed', source: 'Housing.com', phone: '+91 98204 99120' }
    ]
  },
  {
    id: 'followup',
    title: 'Sales Follow-up',
    count: 15,
    color: '#F59E0B',
    leads: [
      { id: 'sf-1', name: 'Sanjay Khan', config: '3 BHK | 200 - 210 L', location: 'Goregaon East', budget: '₹2.08 Cr', time: 'Call Today', source: 'Meta Ads', phone: '+91 98334 11209' },
      { id: 'sf-2', name: 'Arti Shaikh', config: '1 RK | 250 - 260 L', location: 'Bhandup West', budget: '₹2.52 Cr', time: 'Quotation Sent', source: 'Housing.com', phone: '+91 99205 77164' },
      { id: 'sf-3', name: 'Komal Patil', config: '2 BHK | 35 - 45 L', location: 'Juhu', budget: '₹42 L', time: 'Callback at 4 PM', source: 'Database', phone: '+91 98201 99318' },
      { id: 'sf-4', name: 'Bharat Shetty', config: '3 BHK | 45 - 55 L', location: 'Mira Road East', budget: '₹51 L', time: 'Re-visit Planned', source: 'Housing.com', phone: '+91 98199 44321' }
    ]
  },
  {
    id: 'booking',
    title: 'Booking',
    count: 7,
    color: '#F97316',
    leads: [
      { id: 'bk-1', name: 'Vijay Fernandes', config: '1 BHK | 300 - 310 L', location: 'Vikhroli West', budget: '₹3.05 Cr', time: 'Booking Done', source: 'Housing.com', phone: '+91 98202 33144' },
      { id: 'bk-2', name: 'Sachin Shah', config: '3 BHK | 45 - 55 L', location: 'Vile Parle', budget: '₹52 L', time: 'Token Received', source: 'Meta Ads', phone: '+91 98194 55102' },
      { id: 'bk-3', name: 'Anil Khan', config: '3 BHK | 65 - 75 L', location: 'Borivali West', budget: '₹71 L', time: 'Cheque Cleared', source: 'Database', phone: '+91 97692 77019' },
      { id: 'bk-4', name: 'Ganesh Khaire', config: '1 BHK | 85 - 95 L', location: 'Nalasopara West', budget: '₹88 L', time: 'Agreement Pending', source: 'Housing.com', phone: '+91 98210 66491' }
    ]
  },
  {
    id: 'loan',
    title: 'Loan',
    count: 7,
    color: '#8B5CF6',
    leads: [
      { id: 'ln-1', name: 'Payal Desai', config: '2 BHK | 55 - 65 L', location: 'Kandivali West', budget: '₹61 L', time: 'HDFC In-Principle', source: 'Housing.com', phone: '+91 98203 11822' },
      { id: 'ln-2', name: 'Geeta Shaikh', config: '1 RK | 75 - 85 L', location: 'Malad West', budget: '₹80 L', time: 'SBI Sanctioned', source: 'Meta Ads', phone: '+91 98195 44910' },
      { id: 'ln-3', name: 'Priyanka Patil', config: '2 BHK | 95 - 105 L', location: 'Virar West', budget: '₹99 L', time: 'ICICI Login Done', source: 'Database', phone: '+91 97690 33812' }
    ]
  },
  {
    id: 'registration',
    title: 'Registration',
    count: 7,
    color: '#06B6D4',
    leads: [
      { id: 'rg-1', name: 'Rahul Pereira', config: '3 BHK | 45 - 55 L', location: 'Nalasopara West', budget: '₹49 L', time: 'Sub-Registrar Slot 11 AM', source: 'Meta Ads', phone: '+91 98209 77123' },
      { id: 'rg-2', name: 'Nitin Rao', config: '3 BHK | 65 - 75 L', location: 'Dahisar West', budget: '₹73 L', time: 'Challan Paid', source: 'Housing.com', phone: '+91 98191 88204' },
      { id: 'rg-3', name: 'Sunil Fernandes', config: '1 BHK | 85 - 95 L', location: 'Goregaon West', budget: '₹91 L', time: 'Drafting Ready', source: 'Database', phone: '+91 97694 22091' }
    ]
  },
  {
    id: 'closed',
    title: 'Closed',
    count: 8,
    color: '#059669',
    leads: [
      { id: 'cl-1', name: 'Sneha More', config: '2 BHK | 55 - 65 L', location: 'Virar West', budget: '₹60 L', time: 'Keys Handed Over', source: 'Housing.com', phone: '+91 98208 33910' },
      { id: 'cl-2', name: 'Bhakti Iyer', config: '1 RK | 75 - 85 L', location: 'Andheri East', budget: '₹82 L', time: 'Brokerage Received', source: 'Meta Ads', phone: '+91 98193 66109' },
      { id: 'cl-3', name: 'Pallavi Dsouza', config: '2 BHK | 95 - 105 L', location: 'Bandra West', budget: '₹1.01 Cr', time: 'Fully Disbursed', source: 'Database', phone: '+91 97695 44819' }
    ]
  }
];

export const MONTHLY_SOURCE_DATA = [
  { month: 'Dec 25', total: 8, housing: 3, meta: 2, database: 3 },
  { month: 'Jan 26', total: 11, housing: 4, meta: 3, database: 4 },
  { month: 'Feb 26', total: 12, housing: 5, meta: 4, database: 3 },
  { month: 'Mar 26', total: 12, housing: 6, meta: 2, database: 4 },
  { month: 'Apr 26', total: 9, housing: 3, meta: 3, database: 3 },
  { month: 'May 26', total: 12, housing: 4, meta: 4, database: 4 },
  { month: 'Jun 26', total: 10, housing: 5, meta: 2, database: 3 },
  { month: 'Jul 26', total: 13, housing: 6, meta: 3, database: 4 },
  { month: 'Aug 26', total: 10, housing: 3, meta: 4, database: 3 },
  { month: 'Sept 26', total: 10, housing: 4, meta: 2, database: 4 },
  { month: 'Oct 26', total: 11, housing: 5, meta: 3, database: 3 },
  { month: 'Nov 26', total: 14, housing: 6, meta: 4, database: 4 }
];

export const PROJECTS_DATA = [
  {
    id: 'p1',
    name: 'Lodha Woods',
    developer: 'Lodha Group',
    location: 'Kandivali East, Mumbai',
    price: '₹1.45 Cr - ₹2.80 Cr',
    types: '2 & 3 BHK Luxury Residences',
    status: 'Ready for Possession',
    unitsAvailable: 28,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80',
    tags: ['RERA Approved', 'Clubhouse', 'Olympic Pool', 'High ROI']
  },
  {
    id: 'p2',
    name: 'Godrej Horizon',
    developer: 'Godrej Properties',
    location: 'Wadala, Mumbai',
    price: '₹2.10 Cr - ₹4.50 Cr',
    types: '2, 3 & 4 BHK Sea View',
    status: 'Under Construction (Dec 2026)',
    unitsAvailable: 42,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
    tags: ['Harbour View', 'Sky Lounge', '5 Min to Eastern Freeway']
  },
  {
    id: 'p3',
    name: 'Oberoi Sky City',
    developer: 'Oberoi Realty',
    location: 'Borivali East, Mumbai',
    price: '₹3.20 Cr - ₹6.90 Cr',
    types: '3 & 4 BHK Signature Apartments',
    status: 'Ready to Move',
    unitsAvailable: 15,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=80',
    tags: ['Direct WEH Metro Access', 'Oberoi Mall Proximity', '25 Acre Township']
  },
  {
    id: 'p4',
    name: 'Rustomjee Crown',
    developer: 'Rustomjee Group',
    location: 'Prabhadevi, South Mumbai',
    price: '₹6.50 Cr - ₹14.0 Cr',
    types: '3, 4 & 5 BHK Palatial Homes',
    status: 'Ready Possession',
    unitsAvailable: 9,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80',
    tags: ['Sea Link View', 'Private Elevators', 'Ultra Luxury']
  }
];

export const BROKER_PARTNERS = [
  { id: 'bp-1', name: 'Apex Realty Solutions', contact: 'Kunal Singhania', phone: '+91 98200 44101', tier: 'Diamond (2.5%)', dealsClosed: 14, totalBrokerage: '₹32.5 L', pendingPayout: '₹4.2 L' },
  { id: 'bp-2', name: 'Mumbai Prime Estates', contact: 'Ramesh Mehta', phone: '+91 98191 77290', tier: 'Gold (2.0%)', dealsClosed: 9, totalBrokerage: '₹19.8 L', pendingPayout: '₹2.1 L' },
  { id: 'bp-3', name: 'KeyStone Channel Network', contact: 'Anand Tandon', phone: '+91 97694 55301', tier: 'Silver (1.5%)', dealsClosed: 5, totalBrokerage: '₹9.4 L', pendingPayout: '₹1.5 L' },
  { id: 'bp-4', name: 'UrbanNest Realtors', contact: 'Farhan Sayed', phone: '+91 98213 11849', tier: 'Gold (2.0%)', dealsClosed: 8, totalBrokerage: '₹16.2 L', pendingPayout: '₹0 L' }
];

export const INTEGRATIONS_LIST = [
  { id: 'housing', name: 'Housing.com API', category: 'Lead Portal', status: 'Connected', lastSync: '2m ago', activeLeads: 48, icon: 'Globe' },
  { id: 'meta', name: 'Meta Ads Manager (Facebook/IG)', category: 'Social Media Campaigns', status: 'Connected', lastSync: 'Just now', activeLeads: 36, icon: 'Share2' },
  { id: '99acres', name: '99acres Lead Feed', category: 'Lead Portal', status: 'Connected', lastSync: '14m ago', activeLeads: 22, icon: 'Home' },
  { id: 'magicbricks', name: 'MagicBricks Direct API', category: 'Lead Portal', status: 'Connected', lastSync: '1h ago', activeLeads: 19, icon: 'Layers' },
  { id: 'whatsapp', name: 'WhatsApp Cloud Business API', category: 'Messaging & Bot', status: 'Connected', lastSync: 'Continuous', activeLeads: 85, icon: 'MessageCircle' },
  { id: 'exotel', name: 'Exotel CTI Telephony', category: 'Call Recording & Virtual Numbers', status: 'Connected', lastSync: 'Live', activeLeads: 140, icon: 'Phone' }
];

