using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{

    public partial class ProductBusiness : IProductBusiness
    {
        private IProductRespository _res;
        public ProductBusiness (IProductRespository ProductGroupRes)
        {
            _res = ProductGroupRes;
        }
        public bool Create(ProductModel model)
        {
            return _res.Create(model);
        }

        public bool Edit(string id, ProductModel model )
        {
            return _res.Edit(id, model);
        }
        public bool Delete( string id)
        {
            return _res.Delete(id);
        }
        public ProductModel GetDatabyID(string id)
        {
            return _res.GetDatabyID(id);
        }
        public List<ProductModel> GetDataAll()
        {
            return _res.GetDataAll();
        }
        public List<ProductModel> Search(int pageIndex, int pageSize, out long total, string Product_group_id)
        {
            return _res.Search(pageIndex, pageSize, out total, Product_group_id);
        }

        public List<ProductModel> GetProductRelated(int id, string category_id)
        {
            return _res.GetProductRelated(id, category_id);
        }
    }
}
