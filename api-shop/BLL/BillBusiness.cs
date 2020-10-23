using DAL;
using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public partial class BillBusiness : IBillBusiness
    {
        private IBillResponsitory _res;
        public BillBusiness(IBillResponsitory res)
        {
            _res = res;
        }
        public bool Create(BillModel model)
        {
            return _res.Create(model);
        }

        public bool Delete(string id)
        {
            return _res.Delete(id);
        }

        public bool changeStatus(string id, string msg)
        {
            return _res.changeStatus(id, msg);
        }


        public List<BillModel> GetAllBill()
        {
            return _res.GetAllBill();
        }

        public List<BillDetailModel> GetBillByID(string id)
        {
            return _res.GetBillByID(id);
        }
        public Thang ThongKeDoanhThuTheoThang()
        {
            return _res.ThongKeDoanhThuTheoThang();
        }
    }
}
