// interfaces/index.ts
export interface PropertyProps {
  id: string;
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  description: string;
  category: string[]; // <-- ADDED THIS LINE: Property now has a 'category' array
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface PillProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}