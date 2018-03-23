10.times do |proposal|
Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: "http://portfolio.alonso.com",
    tools: "ruby on rails, angular 4, and postgres",
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: "alonso@alonso.com",
)
end
puts "10 proposals created"
Proposal.create!(
    customer: "Google",
    portfolio_url: "http://portfolio.alonso.com",
    tools: "ruby on rails, angular 4, and postgres",
    estimated_hours: 100,
    hourly_rate: 140,
    weeks_to_complete: 10,
    client_email: "alonso@alonso.com",
)