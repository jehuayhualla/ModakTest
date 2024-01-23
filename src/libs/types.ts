export interface PaginationResponse {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface EventResponse {
  alt_audience_ids: number[];
  alt_event_type_ids: number[];
  api_link: string;
  api_model: string;
  audience_id: number;
  buy_button_caption: string | null;
  buy_button_text: string;
  date_display: string;
  description: string;
  door_time: string | null;
  end_date: string;
  end_time: string;
  entrance: string;
  event_host_id: number | null;
  event_host_title: string | null;
  event_type_id: number;
  header_description: string | null;
  hero_caption: string | null;
  id: number;
  image_url: string | null;
  is_admission_required: boolean;
  is_after_hours: boolean;
  is_free: boolean;
  is_member_exclusive: boolean;
  is_private: boolean;
  is_registration_required: boolean;
  is_sold_out: boolean;
  is_ticketed: boolean;
  is_virtual_event: boolean;
  join_url: string | null;
  layout_type: number;
  list_description: string;
  location: string;
  program_ids: number[];
  program_titles: string[];
  rsvp_link: string;
  search_tags: string | null;
  short_description: string;
  slug: string;
  source_updated_at: string;
  start_date: string;
  start_time: string;
  survey_url: string | null;
  ticketed_event_id: number;
  timestamp: string;
  title: string;
  title_display: string | null;
  updated_at: string;
  virtual_event_passcode: string | null;
  virtual_event_url: string | null;
}

export interface ComposeEventResponse {
  pagination: PaginationResponse;
  data: EventResponse[];
}
