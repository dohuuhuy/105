import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/logo.jpg")}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Tư Vấn trực tuyến
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          9067{" "}
                        </span>
                        <span className="text-sm text-gray-500">Lượt Xem</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          403
                        </span>
                        <span className="text-sm text-gray-500">Quan Tâm</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Bình Luận</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Phong Khám Đa Khoa 105
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    105/4A Lê Văn Khương, P. Hiệp thành, Q.12
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-envelope mr-2 text-lg text-gray-500"></i>
                    phongkhamdakhoa105@gmail.com
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-phone mr-2 text-lg text-gray-500"></i>
                    (028) 3717 7726 - 3717 7725
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        <strong>
                          Để thuận tiện cho việc khám chữa bệnh tại phòng khám
                          đa khoa 105, chúng tôi xin gửi tới Quý khách hàng
                          hướng dẫn chi tiết như dưới đây. Quý khách vui lòng
                          đọc kĩ và chuẩn bị các giấy tờ cần thiết để đảm bảo
                          quá trình khám chữa bệnh diễn ra nhanh chóng, hiệu
                          quả.
                        </strong>
                        <br /> <br />
                        Nếu là lần đầu tiên đến khám bệnh tại Phòng khám đa khoa
                        105, Quý khách sẽ đến Quầy tiếp đón ở các phòng khám để
                        mở hồ sơ khách hàng, Quý khách cần cung cấp:
                        <br />
                        <ul className="pl-4">
                          <li> <i class="fas fa-angle-right"></i> Giấy tờ cần thiết</li>
                          <li> <i class="fas fa-angle-right"></i> Họ tên </li>

                          <li>
                          <i class="fas fa-angle-right"></i> Chứng minh thư nhân dân/ Thẻ căn cước công dân/Hộ
                            chiếu hoặc Giấy khai sinh (nếu là trẻ em);
                          </li>

                          <li>
                          <i class="fas fa-angle-right"></i> Thẻ bảo hiểm y tế/ Thẻ bảo hiểm tư nhân (nếu có) để
                            làm thủ tục.
                          </li>

                          <li> <i class="fas fa-angle-right"></i> Các loại thẻ/phiếu ưu đãi (nếu có) </li>
                        </ul>
                        <br />
                       <strong> Quý khách lưu ý:</strong>
                        <br />
                        Các giấy tờ kể trên cần được mang theo tại tất cả các
                        lần sử dụng dịch vụ tại bệnh viện Phòng khám đa khoa
                        105.
                        <br />
                        Trước khi thăm khám hoặc thực hiện bất cứ can thiệp y tế
                        nào, Quý khách đều được định danh bằng ít nhất 2 thông
                        số: <br />
                        (1) Họ tên đầy đủ, <br />
                        (2) Ngày tháng năm sinh và mã PID (nếu cần) để tránh tối
                        đa các sai sót có thể xảy ra.
                        <br />   <br />   <br />
                       <strong> Để tìm hiểu tất cả các thông tin về bệnh viện, Quý khách
                        có thể xem tại các bảng tin và hệ thống quầy thông tin
                        đặt tại sảnh chính bệnh viện. <br />
                        Ngoài ra, Quý khách cũng có thể yêu cầu thăm quan bệnh
                        viện với sự hỗ trợ từ nhân viên chăm sóc khách hàng.</strong>
                        <br />
                        Quy trình khám chữa bệnh tại Phòng khám đa khoa 105
                        <br />   <br />
                        Bước 1: Điền phiếu đăng ký (01 bản) và Sao chụp các loại
                        giấy tờ tùy thân, thẻ Bảo hiểm...
                        <br />   <br />
                        Bước 2: Ký chứng từ thanh toán (02 bảng kê + 01 biên lai
                        thu tiền viện phí) và Ký thanh toán bảo hiểm (01 bản -
                        nếu khách hàng sử dụng Bảo hiểm tư nhân)
                        <br />   <br />
                        Bước 3: Ký phiếu đồng ý làm xét nghiệm HIV, phiếu đồng ý
                        thực hiện chẩn đoán trước khi thực hiện dịch vụ (nếu có)
                        hoặc phiếu từ chối thực hiện (01 bản)
                        <br />   <br />
                        Bước 4: Ký chứng từ thanh toán (02 bảng kê + 01 biên lai
                        thu tiền viện phí) và Ký thanh toán bảo hiểm (01 bản -
                        nếu khách hàng sử dụng Bảo hiểm tư nhân)
                        <br />   <br />
                        Bước 5: Ký phiếu yêu cầu sử dụng dịch vụ (02 bản)
                        <br />   <br />
                        Bước 6: Ký phiếu yêu cầu sử dụng dịch vụ (02 bản) và Ký
                        phiếu đồng ý điều trị (01 bản)
                        <br />   <br />
                        Bước 7: Ký chứng từ thanh toán (02 bảng kê + 01 biên lai
                        thu tiền) và Ký thanh toán bảo hiểm và cam kết thanh
                        toán (02 bản - đối với khách hàng có Bảo hiểm tư nhân)
                        <br />   <br />
                        Bước 8: Ký phiếu xác nhận giờ nhận và trả phòng (01
                        bản); Ký chứng từ thanh toán (02 bản kê + 01 biên lai
                        thu tiền); Ký phiếu xác nhận bồi thường bảo hiểm (01 bản
                        - đối với khách hàng dùng Bảo hiểm y tế/ Bảo hiểm tư
                        nhân)
                        <br />   <br />
                      </p>

                      {/* <a
                        href="#pablo"
                        className="font-normal text-blue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
