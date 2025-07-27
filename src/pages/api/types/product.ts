export interface Section {
  type: string;
  name: string;
  values: any[];
}

export interface ChecklistItem {
  icon: string;
  text: string;
  list_page_visibility: boolean;
}

export interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
}

export interface ProductData {
  title: string;
  description: string; 
  media: MediaItem[];
  checklist: ChecklistItem[];
  cta_text: {
    name: string; // This is the CTA text
    value: string;
  };
  sections: Section[];
  seo: {
    title?: string;
    description?: string;
  };
}