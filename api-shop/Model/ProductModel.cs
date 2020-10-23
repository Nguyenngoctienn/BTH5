using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
   public  class ProductModel
    {
        public int product_id { set; get; }
        public string name { set; get; }
        public string image_url { set; get; }
        public int? price { set; get; }
        public int? quantity { set; get; }
        public int? promotion_price { set; get; }
        public string category_id { set; get; }
        public string description { set; get; }
        public string detail { set; get; }
        public int? status { set; get; }
        public DateTime? created_at  { set; get; }
    }
}
