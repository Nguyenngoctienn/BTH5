using Model;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;

namespace DAL
{

    public partial interface IProductRespository
    {
        bool Create(ProductModel model);
       
        bool Delete(string id);
        bool Edit(string id, ProductModel model);
        ProductModel GetDatabyID(string id);
        List<ProductModel> GetDataAll();
        List<ProductModel> Search(int pageIndex, int pageSize, out long total,  string category_id);
        List<ProductModel> GetProductRelated(int id, string category_id);

    }
}
