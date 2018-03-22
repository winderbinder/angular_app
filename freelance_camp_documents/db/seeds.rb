#   create_table "freelance_documents", force: :cascade do |t|
#     t.string "title"
#     t.string "description"
#     t.text "file_url"
#     t.text "image_url"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end

# end

10.times do |copy|
FreelanceDocument.create!(title: "Document #{copy}",
                          description: "though sahlt an die fhaiw goeur as ciehfo coif aieirf ofoha foeoro oaoc weifba gboier oaef oc eori coiuae aoif erero",
                          file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit",
                          image_url: "http://www.bigfoto.com/stones-background.jpg"
  )
end
puts "10 documents created"
