using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Model;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillController : ControllerBase
    {
        private IBillBusiness _hoaDonBusiness;
        public BillController(IBillBusiness hoaDonBusiness)
        {
            _hoaDonBusiness = hoaDonBusiness;
        }

        [Route("create-bill")]
        [HttpPost]
        public BillModel CreateItem([FromBody] BillModel model)
        {
            model.id = Guid.NewGuid().ToString();
            if (model.listjson_chitiet != null)
            {
                foreach (var item in model.listjson_chitiet)
                    item.id = Guid.NewGuid().ToString();
            }
            _hoaDonBusiness.Create(model);
            return model;
        }

        [Route("get-bill-detail/{id}")]
        [HttpGet]
        public List<BillDetailModel> GetBillDetail(string id)
        {
            return _hoaDonBusiness.GetBillByID(id);
        }

        [Route("delete-bill/{id}")]
        [HttpGet]
        public bool Delet(string id)
        {
            return _hoaDonBusiness.Delete(id);
        }


        [Route("change-status/{id}/{msg}")]
        [HttpGet]
        public bool changeStatus(string id, string msg)
        {
            return _hoaDonBusiness.changeStatus(id, msg);
        }



        [Route("get-bills")]
        [HttpGet]
        public List<BillModel> GetBills()
        {
            return _hoaDonBusiness.GetAllBill();
        }

        [Route("doanh-thu-theo-thang")]
        [HttpGet]
        public Thang DoanhThuTheoThang()
        {
            return _hoaDonBusiness.ThongKeDoanhThuTheoThang();
        }
    }
}
