import Footer from "components/Footers/Footer.js";
// components
import Navbar from "components/Navbars/AuthNavbar.js";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('img/logo1.jpg')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    PHÒNG KHÁM ĐA KHOA 105
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    "Sẵn sàng phục vụ bạn, vì sức khỏe của bạn." <br />
                    Trang thiết bị y tế hiện đại, Công nghệ điều trị tiên tiến,
                    Đội ngũ bác sĩ giàu kinh nghiệm.
                  </p>
                </div>
              </div>
            </div>
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
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Trường hợp khẩn cấp
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Hãy liên hệ ngay với chúng tôi để được hướng dẫn, tránh
                      những trường hợp xấu nhất. <br />
                      (028) 3717 7726 - 3717 7725
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Thời gian làm việc
                    </h6>

                    <ul className="mt-2 mb-4 text-gray-600">
                      <li>
                        <span className="left"> Sáng </span>
                        <span className="right">7h00 - 11h00</span>
                      </li>
                      <li>
                        <span className="left"> Chiều </span>
                        <span className="right">13h30 – 20h30</span>
                      </li>
                      <li>
                        <span className="left"> Cấp cứu </span>
                        <span className="right">24/24 </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Phương châm</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Với phương châm hoạt động "Luôn đáp ứng nhu cầu khám chữa
                      bệnh chất lượng cao và tiết kiệm thời gian, chi phí tối
                      thiểu cho khách hàng !".
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Về chúng tôi
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Tự hào là Phòng khám Đa khoa uy tín cung cấp dịch vụ y tế chất
                  lượng cao và toàn diện.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Tại Phòng khám Đa khoa 105, đội ngũ nhân viên y tế chuyên môn
                  cao sẽ cùng nhau xây dựng một kế hoạch chăm sóc, điều trị và
                  phòng bệnh hiệu quả cho chính bản thân và gia đình bạn.
                </p>
                <Link to="/" className="font-bold text-gray-800 mt-8">
                  Xem thêm
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <img
                    alt="..."
                    src={"img/dichvu.png"}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-600 fill-current"
                      ></polygon>
                    </svg>

                    <h4 className="text-xl font-bold text-white">
                      Dịch vụ của chúng tôi
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Chuyên viên lành nghệ giàu kinh nghiệm <br />
                      Tận tâm và chu đáo <br />
                      Dịch vụ chất lượng cao
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={"img/trangbi.jpg"}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Trang thiết bị</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Có thể nói, bằng sự nỗ lực và không ngừng đổi mới trong suốt
                    những năm qua, <strong>Phong khám đa khoa 105</strong> đã
                    trở thành địa chỉ uy tín, tin cậy để khách hàng trao gửi
                    niềm tin sức khỏe với một hệ thống dịch vụ y tế chất lượng
                    cao và toàn diện nhất.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Máy X-Quang kỹ thuật số
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Máy siêu âm</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Máy xét nghiệm sinh hóa, huyết học
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Đội ngũ bác sĩ</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Tại Phòng khám Đa khoa 105, đội ngũ nhân viên y tế chuyên môn
                  cao sẽ cùng nhau xây dựng một kế hoạch chăm sóc, điều trị và
                  phòng bệnh hiệu quả cho chính bản thân và gia đình bạn.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"img/DoiNguBacSi/TranAnhTuan.png"}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      ThS.BS – Trần Anh Tuấn
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Phó Giám Đốc Y Khoa
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"img/DoiNguBacSi/PhanThiXuanLan.png"}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      BS.CKI – Phan Thị Xuân Lan
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"img/DoiNguBacSi/TranDoanPhuongTran.png"}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      BS.CKI – Trần Đoàn Phương Trân
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Phó Khoa Khám Bệnh
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"img/DoiNguBacSi/DangThiTuyetNga.png"}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      BS – Đặng Thị Tuyết Nga
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Phó P. Khám KHHGĐ
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-20">
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"img/DoiNguBacSi/PhamThiHoa.png"}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">BS.CKI – Phạm Thị Hoa</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Phòng Cấp Cứu
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"img/DoiNguBacSi/HoVietAi.png"}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">BS – Hồ Viết Ái</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Phó Khoa PT – GMHS
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={"img/DoiNguBacSi/PhamThanhDuc.png"}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      TS.BS – Phạm Thành Đức
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Khoa tiêu hóa gan mật
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Xây dựng thương hiệu
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500"></p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Giấy phép
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Giấy phép hoạt động khám chữa bệnh số 04016/HCM-GPHĐ do Sở y
                  tế Tp. Hồ Chí Minh cấp ngày 23/11/2009;
                  <br />
                  Căn cứ Nghị định số 41/2011/TT-BYT ngày 27 tháng 9 năm 2011
                  của Chính phủ quy định chi tiết và hướng dẫn thi hành một số
                  điều Luật khám bệnh, chữa bệnh;
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Niềm tin
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Trở thành sự lựa hàng đầu
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Uy tín
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Đảm bảo trị đúng bệnh và hết bệnh, theo liệu trình chuẩn.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Muốn làm việc với chúng tôi không?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Hoàn thành mẫu đơn này và chúng tôi sẽ phản hồi lại cho
                      bạn trong vòng 24 giờ.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Tin Nhắn
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Xác nhận
                      </button>
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
