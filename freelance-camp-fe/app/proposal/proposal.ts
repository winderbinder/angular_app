export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: string,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string,
  ) {}
}

// 'xyz company', 'http://portfolio.alonsohernandez.com', 'ruby on rails',
//150, 120, 15, 'alonsohernandez.com'