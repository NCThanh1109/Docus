// Data structure for equipment items
export const glassEquipment = [
  {
    title: "Test tube (Ống nghiệm)",
    description: (
      <>
        <p>
          Ống nghiệm, còn được gọi là ống mẫu, là một dụng cụ thủy tinh phổ biến
          trong phòng thí nghiệm. Nó là một ống thủy tinh hoặc nhựa trong suốt,
          có hình dạng giống ngón tay, mở ở phía trên và đóng kín ở phía dưới.
        </p>
        <p>
          <strong>Một số loại ống nghiệm thường gặp:</strong>
        </p>
        <table
          style={{ textAlign: "center", width: "100%", marginTop: "1rem" }}
        >
          <tr>
            <td width="50%">
              <strong>Ống nghiệm thường</strong>
              <br />
              <img
                src="https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiemthuong.png"
                width="100px"
              />
            </td>
            <td>
              <strong>Ống nghiệm hai nhánh</strong>
              <br />
              <img
                src="https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiem2nhanh.png"
                width="100px"
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ống nghiệm chia độ</strong>
              <br />
              <img
                src="https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiemchiado.png"
                width="100px"
              />
            </td>
            <td>
              <strong>Ống nghiệm có nhánh</strong>
              <br />
              <img
                src="https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiemconhanh.png"
                width="150px"
              />
            </td>
          </tr>
        </table>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiemthuong.png",
        alt: "Ống nghiệm thường",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiem2nhanh.png",
        alt: "Ống nghiệm hai nhánh",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiemchiado.png",
        alt: "Ống nghiệm chia độ",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnghiemconhanh.png",
        alt: "Ống nghiệm có nhánh",
      },
    ],
  },
  {
    title: "Beakers (Cốc thủy tinh)",
    description: (
      <>
        <p>
          Cốc thủy tinh được dùng làm vật chứa. Chúng có nhiều kích cỡ khác nhau
          từ 25 ml, 50 ml, ..., 2 lít. Mặc dù thường có các vạch chia thể tích,
          nhưng những vạch này chỉ cung cấp ước tính gần đúng về thể tích chất
          lỏng.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/cocthuytinh1.jpg",
        alt: "Cốc thủy tinh 1",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/cocthuytinh2.png",
        alt: "Cốc thủy tinh 2",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/cocthuytinh3.png",
        alt: "Cốc thủy tinh 3",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/cocthuytinh4.png",
        alt: "Cốc thủy tinh 4",
      },
    ],
  },
  {
    title: "Erlenmeyer flask (Bình tam giác)",
    description: (
      <>
        <p>
          Bình tam giác thường được dùng làm bình phản ứng, đặc biệt trong các
          phép chuẩn độ. Tương tự như cốc thủy tinh (beakers), các vạch chia thể
          tích trên bình không được coi là chính xác.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhtamgiac1.png",
        alt: "Bình tam giác 1",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhtamgiac2.png",
        alt: "Bình tam giác 2",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhtamgiac3.png",
        alt: "Bình tam giác 3",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhtamgiac4.jpg",
        alt: "Bình tam giác 4",
      },
    ],
  },
  {
    title: "Volumetric flask (Bình định mức)",
    description: (
      <>
        <p>
          Bình định mức được dùng để đo và lưu trữ dung dịch với độ chính xác
          cao. Những bình này thường có một vạch chia gần phía trên, cho biết
          mức chất lỏng tại đó thể tích chất lỏng bằng với thể tích được ghi
          trên thân bình. Những dụng cụ này thường được dùng khi cần pha các
          dung dịch có chứa chất rắn hòa tan với nồng độ đã biết.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhdinhmuc1.png",
        alt: "Bình định mức 1",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhdinhmuc2.png",
        alt: "Bình định mức 2",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhdinhmuc3.png",
        alt: "Bình định mức 3",
      },
    ],
  },
  {
    title: "Graduated cylinder (Ống đong)",
    description: (
      <>
        <p>
          Ống đong được dùng để chuyển chất lỏng với độ chính xác trung bình.
        </p>
        <p>Có nhiều cỡ: 5 ml, 10 ml, 25 ml, 50 ml,...</p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongdong1.png",
        alt: "Ống đong 1",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongdong2.png",
        alt: "Ống đong 2",
      },
    ],
  },
  {
    title: "Pipette (Pipet/Ống nhỏ giọt)",
    description: (
      <>
        <p>
          <strong>Có 2 loại:</strong>
        </p>
        <p>
          <strong>Loại chia độ:</strong> Cho phép lấy những thể tích bất kì, cỡ
          bé nhất là micro pipet 1ml
        </p>
        <p>
          <strong>Loại bầu:</strong> Chỉ cho phép lấy những thể tích nhất định:
          5 ml, 10 ml, 20 ml, 25 ml hay 50 ml.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnhogiot2cai.png",
        alt: "Ống nhỏ giọt",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/chitietongnhogiot.png",
        alt: "Chi tiết ống nhỏ giọt",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnhogiot2.png",
        alt: "Ống nhỏ giọt 2",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnhogiotbau.png",
        alt: "Ống nhỏ giọt bầu",
      },
    ],
  },
  {
    title: "Buret",
    description: (
      <>
        <p>
          Buret là dụng cụ thường được sử dụng trong các ứng dụng hóa học phân
          tích và định lượng để đo thể tích dung dịch. Cho phép lấy những thể
          tích dung dịch chính xác một cách liên tục.
        </p>
        <p>
          Khác với pipet, lượng mẫu được lấy ra có thể thay đổi được. Buret có
          chia vạch được sử dụng rộng rãi trong các thí nghiệm chuẩn độ.
        </p>
        <p>
          Thể tích được lấy ra là hiệu số của hai thể tích V cuối - V ban đầu.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/buretthucte.png",
        alt: "Buret thực tế",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/buretanh.png",
        alt: "Buret",
      },
    ],
  },
  {
    title: "Spherical flask (Bình cầu)",
    description: (
      <>
        <p>
          <strong>a/ Round-bottom flasks (Bình cầu đáy tròn)</strong>
        </p>
        <p>
          Bình cầu đáy tròn là một loại bình có đáy hình cầu, thường để đun hóa
          chất
        </p>
        <p>
          <strong>b/ Flat-bottomed flask (Bình cầu đáy bằng)</strong>
        </p>
        <p>
          Bình cầu đáy bằng để đựng các dung dịch pha chế, lắp các bộ máy thí
          nghiệm, không dùng để đun.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhcaudaytron.png",
        alt: "Bình cầu đáy tròn",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhcaudaytronconhanh.png",
        alt: "Bình cầu đáy tròn có nhánh",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhcaudaybang.png",
        alt: "Bình cầu đáy bằng",
      },
    ],
  },
  {
    title: "Glass Condenser (Ống sinh hàn)",
    description: (
      <>
        <p>
          Ống sinh hàn là một dụng cụ hoặc thiết bị dùng để ngưng tụ (thay đổi
          trạng thái vật lý của một chất từ thể khí sang thể lỏng).
        </p>
        <p>
          Trong phòng thí nghiệm, ống sinh hàn thường được dùng trong các quy
          trình liên quan đến chất lỏng hữu cơ được chuyển sang trạng thái khí
          bằng cách đun nóng, có hoặc không giảm áp suất (tạo chân không).
        </p>
        <ul>
          <li>Dùng để làm lạnh hoặc ngưng tụ hơi một chất lỏng nào đó.</li>
          <li>Dùng trong chưng cất các hỗn hợp</li>
        </ul>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongsinhhan1.png",
        alt: "Ống sinh hàn 1",
      },
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongsinhhan2.png",
        alt: "Ống sinh hàn 2",
      },
    ],
  },
  {
    title: "Separatory funnel (Phễu chiết)",
    description: (
      <>
        <p>
          Phễu chiết, còn được gọi là phễu phân tách, là một dụng cụ thủy tinh
          trong phòng thí nghiệm dùng trong các quá trình chiết lỏng-lỏng để
          tách các thành phần của hỗn hợp thành hai pha dung môi không tan vào
          nhau có khối lượng riêng khác nhau.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/pheuchiet.png",
        alt: "Phễu chiết",
      },
    ],
  },
  {
    title: "Filtering flask (Bình lọc)",
    description: (
      <>
        <p>
          Bình lọc là một dụng cụ phòng thí nghiệm được sử dụng để tách chất rắn
          ra khỏi chất lỏng trong các thao tác lọc. Để lọc các chất, bình này
          được dùng cùng với một phễu lọc, chẳng hạn như phễu Buchner, có đĩa
          thủy tinh xốp hoặc tấm đục lỗ kèm theo một miếng giấy lọc để lọc các
          hạt
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/binhloc.png",
        alt: "Bình lọc",
      },
    ],
  },
  {
    title: "Watch glass (Mặt kính đồng hồ)",
    description: (
      <>
        <p>
          Mặt kính đồng hồ là một dụng cụ thủy tinh hình tròn, lõm, được sử dụng
          trong hóa học làm bề mặt để làm bay hơi chất lỏng, để chứa chất rắn
          khi cân, để đun nóng một lượng nhỏ chất, và làm nắp đậy cho cốc thủy
          tinh.
        </p>
        <p>
          Công dụng cuối cùng này thường được áp dụng để ngăn bụi hoặc các hạt
          khác lọt vào cốc; mặt kính đồng hồ không đậy kín hoàn toàn miệng cốc
          nên sự trao đổi khí vẫn diễn ra.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/matkinhdongho.png",
        alt: "Mặt kính đồng hồ",
      },
    ],
  },
  {
    title: "Fusion tube (Ống nung chảy)",
    description: (
      <>
        <p>
          Ống nung chảy là một loại ống thí nghiệm được sử dụng tương tự như ống
          đun sôi nhưng không lớn và có thành dày bằng. Ống nung chảy được làm
          bằng thủy tinh mỏng hơn vì nó được thiết kế để đập vỡ vào một bình
          chứa nước ở cuối quá trình nung chảy.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/ongnungchay.png",
        alt: "Ống nung chảy",
      },
    ],
  },
  {
    title: "Reagent bottle (Chai đựng hóa chất)",
    description: (
      <>
        <p>
          Chai đựng hóa chất, còn được gọi là chai môi trường hoặc chai chia
          vạch, là những vật chứa được làm từ thủy tinh, nhựa, thủy tinh
          borosilicate hoặc các vật liệu tương tự, có nắp hoặc nút đậy đặc biệt.
          Chúng được dùng để chứa hóa chất ở dạng lỏng hoặc bột trong phòng thí
          nghiệm và được lưu trữ trong tủ hoặc trên kệ.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/chaidunghoachat.png",
        alt: "Chai đựng hóa chất",
      },
    ],
  },
  {
    title: "Petri dish (Đĩa petri)",
    description: (
      <>
        <p>Đĩa petri là một chiếc đĩa nhỏ có hình dạng giống hình trụ.</p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/diepetri.png",
        alt: "Đĩa petri",
      },
    ],
  },
  {
    title: "Glass rod (Đũa thủy tinh)",
    description: (
      <>
        <p>
          Đũa khuấy thủy tinh, đũa thủy tinh, hoặc đũa khuấy là một dụng cụ
          phòng thí nghiệm dùng để khuấy trộn hóa chất và chất lỏng cho các mục
          đích thí nghiệm. Chúng thường được làm bằng thủy tinh đặc, có độ dày
          và dài hơn một chút so với ống hút, với các đầu được bo tròn.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/duathuytinh.png",
        alt: "Đũa thủy tinh",
      },
    ],
  },
  {
    title: "Đèn cồn",
    description: (
      <>
        <p>Khi sử dụng đèn cồn cần lưu ý các điểm sau:</p>
        <ul>
          <li>
            <strong>+</strong> Không để đèn cồn cạn gần hết, vì còn ít quả sẽ
            tạo với không khí hỗn hợp nổ. Khi đèn rớt còn vào đèn tối gần ngọn
            đèn.
          </li>
          <li>
            <strong>+</strong> Tuyệt đối không châm đèn bằng cách lấy ngon đèn
            cồn này chạm vào bấc của đèn cồn kia.
          </li>
          <li>
            <strong>+</strong> Muốn tắt đèn cồn phải dùng nắp đèn cồn chụp vào.
          </li>
          <li>
            <strong>+</strong> Khi kết thúc thí nghiệm cần vặn nắp đèn cồn.
          </li>
        </ul>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcuthuytinh/dencon.png",
        alt: "Đèn cồn",
      },
    ],
  },
];

export const metalEquipment = [
  {
    title: "Buret clamp (Kẹp buret)",
    description: (
      <>
        <p>
          Kẹp buret là một thiết bị khoa học được sử dụng đặc biệt để giữ và cố
          định buret trên giá đỡ, giúp buret được cố định và thuận tiện hơn cho
          thí nghiệm. Kẹp buret có thể được làm từ nhiều vật liệu như nhựa và
          gang đúc. Tuy nhiên, kẹp bằng sắt có nút bọc cao su để giữ buret
          thường bền hơn.
        </p>
        <p>
          Kẹp buret thường đi theo bộ đôi, có nghĩa là nó có thể giữ hai buret.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/kepburet.png",
        alt: "Kẹp buret",
      },
    ],
  },
  {
    title: "Clamp (Kẹp)",
    description: (
      <>
        <p>
          Kẹp được dùng để giữ các dụng cụ thủy tinh tròn trong phòng thí
          nghiệm, chẳng hạn như cốc thủy tinh và bình tam giác, v.v. Loại kẹp
          này được làm từ thép không gỉ.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/kep.png",
        alt: "Kẹp",
      },
    ],
  },
  {
    title: "Test tube brush (Chổi cọ ống nghiệm)",
    description: (
      <>
        <p>
          Chổi cọ ống nghiệm, hoặc chổi cọ vòi, là một loại bàn chải được dùng
          để làm sạch ống nghiệm và các dụng cụ thủy tinh có miệng hẹp trong
          phòng thí nghiệm, như ống đong, buret và bình tam giác.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/choicoongnghiem.png",
        alt: "Chổi cọ ống nghiệm",
      },
    ],
  },
  {
    title: "Test tube stand (Giá để ống nghiệm)",
    description: (
      <>
        <p>
          Giá để ống nghiệm là một dụng cụ trong phòng thí nghiệm được sử dụng
          để giữ nhiều ống nghiệm ở tư thế thẳng đứng cùng một lúc.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/giadeongnghiem.png",
        alt: "Giá để ống nghiệm",
      },
    ],
  },
  {
    title: "Tongs (Kẹp gắp)",
    description: (
      <>
        <p>
          Kẹp gắp là một loại dụng cụ dùng để kẹp và nhấc các vật thể thay vì
          dùng tay trực tiếp
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/kepgap.png",
        alt: "Kẹp gắp",
      },
    ],
  },
  {
    title: "Utility clamp (Kẹp đa năng)",
    description: (
      <>
        <p>
          Kẹp đa năng là một dụng cụ trong phòng thí nghiệm có hình dáng giống
          như một chiếc kéo. Con vít ở giữa được dùng để điều chỉnh độ mở của
          hai ngàm kẹp. Kẹp này gồm ba phần: ngàm kẹp điều chỉnh, thanh kim loại
          và kẹp gắn (dùng để gắn kẹp vào giá đỡ và điều chỉnh độ cao).
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/kepdanang.png",
        alt: "Kẹp đa năng",
      },
    ],
  },
  {
    title: "Spot test plate (Tấm vi phiến)",
    description: (
      <>
        <p>
          Tấm vi phiến, còn được gọi là tấm phản ứng, là một dụng cụ phòng thí
          nghiệm được làm từ gốm sứ.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/tamviphien.png",
        alt: "Tấm vi phiến",
      },
    ],
  },
  {
    title: "Tripod for Bunsen burner (Kiềng 3 chân)",
    description: (
      <>
        <p>
          Kiềng 3 chân là một bệ đỡ có ba chân, được dùng để đỡ bình tam giác và
          cốc thủy tinh.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/kieng3chan.png",
        alt: "Kiềng 3 chân",
      },
    ],
  },
  {
    title: "Wash Bottle (Bình tia)",
    description: (
      <>
        <p>
          Bình tia là một chai bóp có vòi, được dùng để rửa các dụng cụ thủy
          tinh khác nhau trong phòng thí nghiệm, chẳng hạn như ống nghiệm và
          bình cầu đáy tròn. Bình tia được đậy kín bằng nắp vặn. Dùng cho tia
          nước nhỏ và mạnh dùng khí rửa kết tủa để xáo trộn kết tủa.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/binhtia.png",
        alt: "Bình tia",
      },
    ],
  },
  {
    title: "Wire Mesh Gauze (Ceramic Centre) (Lưới amiăng)",
    description: (
      <>
        <p>
          Lưới amiăng được sử dụng để phân bố đều nhiệt từ ngọn lửa ở đáy của
          vật được nung nóng. Nó được làm từ các sợi dây sắt có hoặc không có
          lõi sứ bên trong.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/luoiamiang.png",
        alt: "Lưới amiăng",
      },
    ],
  },
  {
    title: "Spatula (Thìa lấy hóa chất/Thìa cân)",
    description: (
      <>
        <p>
          Trong phòng thí nghiệm, thìa lấy hóa chất và thìa lấy hóa chất vi
          lượng là những dụng cụ nhỏ bằng thép không gỉ, được dùng để cạo,
          chuyển hoặc lấy các loại hóa chất dạng bột và dạng sệt. Nhiều loại
          thìa này còn có khả năng chống axit, bazơ, nhiệt và dung môi, làm cho
          chúng trở thành lựa chọn lý tưởng để sử dụng với nhiều loại hợp chất
          khác nhau.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/thialayhoachat.png",
        alt: "Thìa lấy hóa chất",
      },
    ],
  },
  {
    title: "Mortar and pestle (Cối và chày)",
    description: (
      <>
        <p>
          Cối và chày là những dụng cụ đã được sử dụng từ thời xa xưa để chuẩn
          bị các nguyên liệu hoặc chất bằng cách nghiền và tán chúng thành một
          hỗn hợp sệt hoặc bột mịn trong phòng thí nghiệm.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/coivachay.png",
        alt: "Cối và chày",
      },
    ],
  },
  {
    title: "Bếp điện",
    description: (
      <>
        <p>Bếp điện được sử dụng trong các trường hợp sau:</p>
        <ul>
          <li>
            <strong>+</strong> Đun nóng hoặc dung sôi chất lỏng với lượng lớn
            trong các cốc thuỷ tinh.
          </li>
          <li>
            <strong>+</strong> Làm khan các chất rắn trong các cốc sứ.
          </li>
          <li>
            <strong>+</strong> Nhiệt độ phân chẩn rất khó khăn trong khoảng thời
            gian dài.
          </li>
        </ul>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/bepdien.png",
        alt: "Bếp điện",
      },
    ],
  },
  {
    title: "Digital Balance (Cân điện tử)",
    description: (
      <>
        <p>
          Cân điện tử trong các phòng thí nghiệm Hóa học Đại cương là những dụng
          cụ rất nhạy, được dùng để cân các chất với độ chính xác đến mức
          miligam (0,001 g). Xin hãy sử dụng chúng cẩn thận. Hãy dùng vật chứa
          khi cân hóa chất và luôn cân các vật thể ở nhiệt độ phòng. Giữ các tấm
          chắn gió luôn đóng. Không làm rung dụng cụ hoặc thay đổi vị trí cân.
          Luôn vệ sinh khu vực xung quanh đĩa cân bằng cọ mềm sau khi sử dụng và
          thông báo cho nhân viên phòng thí nghiệm nếu chất lỏng hoặc chất rắn
          bị đổ lên cân.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/candientu.png",
        alt: "Cân điện tử",
      },
    ],
  },
  {
    title:
      "Buchner funnel vacuum filtration setup (Hệ thống lọc hút chân không phễu Buchner)",
    description: (
      <>
        <p>
          Lọc hút (lọc chân không) là kỹ thuật tiêu chuẩn được sử dụng để tách
          hỗn hợp rắn-lỏng khi mục tiêu là giữ lại phần rắn (ví dụ trong quá
          trình kết tinh). Tương tự như lọc trọng lực, hỗn hợp rắn-lỏng được rót
          lên giấy lọc, với điểm khác biệt chính là quá trình được hỗ trợ bằng
          lực hút ở bên dưới phễu.
        </p>
      </>
    ),
    images: [
      {
        src: "https://raw.githubusercontent.com/NCThanh1109/KHKT/main/dungcu/dungcukimloai/hethonglochutchankhongpheubuchner.png",
        alt: "Hệ thống lọc hút chân không phễu Buchner",
      },
    ],
  },
];

export const singleSubstance = [
  {
    title: "Kim loại",
    description: (
      <>
        <p>
          <strong>– Kim loại kiềm (Li, Na, K, Rb, Cs):</strong> Có màu trắng
          bạc, nhưng dễ bị oxi hóa nên thường xỉn màu.
        </p>
        <p>
          <strong>– Kim loại kiềm thổ (Be, Mg, Ca, Sr, Ba):</strong> Có màu
          trắng bạc.
        </p>
        <p>
          <strong>– Iron - Sắt (Fe):</strong> Kim loại sắt có màu trắng xám đặc
          trưng, có ánh kim.
        </p>
        <p>
          <strong>– Copper - Đồng (Cu):</strong> Màu đỏ ánh kim.
        </p>
        <p>
          <strong>– Silver - Bạc (Ag):</strong> màu trắng bạc, là kim loại có độ
          bóng cao.
        </p>
        <p>
          <strong>– Gold - Vàng (Au):</strong> màu vàng đặc trưng mà không bị
          xỉn màu trong không khí.
        </p>
        <p>
          <strong>– Aluminium - Nhôm (Al):</strong> màu trắng bạc.
        </p>
        <p>
          <strong>– Lead - Chì (Pb):</strong> màu trắng xám.
        </p>
        <p>
          <strong>– Zinc - Kẽm (Zn):</strong> màu xám nhạt với ánh xanh lam.
        </p>
        <p>
          <strong>– Chromium - Crom (Cr):</strong> màu xám thép với độ bóng cao.
        </p>
        <p>
          <strong>– Nickel - Niken (Ni):</strong> màu bạc với ánh kim.
        </p>
        <p>
          <strong>– Titanium - Titan (Ti):</strong> màu trắng bạc.
        </p>
        <p>
          <strong>– Mercury - Thủy ngân (Hg):</strong> kim loại dạng lỏng, màu
          trắng bạc.
        </p>
      </>
    ),
  },
  {
    title: "Phi kim",
    description: (
      <>
        <p>
          <strong>– Nitrogen (N₂):</strong> khí không màu.
        </p>
        <p>
          <strong>– Oxygen (O₂):</strong> khí không màu.
        </p>
        <p>
          <strong>– Hydrogen (H₂):</strong> khí không màu
        </p>
        <p>
          <strong>– Florine (F₂):</strong> khí màu vàng lục nhạt.
        </p>
        <p>
          <strong>– Chlorine (Cl₂):</strong> khí màu vàng lục nhạt.
        </p>
        <p>
          <strong>– Bromine (Br₂):</strong> chất lỏng, màu nâu đỏ, dễ bay hơi.
        </p>
        <p>
          <strong>– Iodine (I₂):</strong> rắn, màu tím than.
        </p>
        <p>
          <strong>– Phosphorus (P):</strong> tồn tại dưới nhiều dạng thù hình
          với các màu khác nhau:
          <div style={{ marginLeft: "13px" }}>
            <p>
              <strong>+ Màu trắng:</strong> rất độc và dễ tự bốc cháy trong
              không khí.
            </p>
            <p>
              <strong>+ Màu đỏ.</strong>
            </p>
            <p>
              <strong>+ Màu đen.</strong>
            </p>
          </div>
        </p>
        <p>
          <strong>– Carbon (C):</strong> chủ yếu tồn tại dưới dạng đen (than
          chì) hoặc không màu (kim cương).
        </p>
      </>
    ),
  },
];

export const Compound = [
  {
    title: "Màu sắc hợp chất chứa nhôm (Aluminium)",
    description: (
      <>
        <p>
          <strong>– Al₂O₃:</strong> rắn, màu trắng.
        </p>
        <p>
          <strong>– Kim loại kiềm thổ (Be, Mg, Ca, Sr, Ba):</strong> Có màu
          trắng bạc.
        </p>
        <p>
          <strong>– AlCl₃:</strong> Có màu trắng bạc.
        </p>
        <p>
          <strong>– Al(OH)₃:</strong> : kết tủa keo trắng
        </p>
        <p>
          <strong>– Al₂(SO₄)₃:</strong> dung dịch màu trắng.
        </p>
      </>
    ),
  },
  {
    title: "Màu của một số chất khi cháy",
    description: (
      <>
        <p>
          <strong>– Hợp chất của Li⁺:</strong> cháy với ngọn lửa màu đỏ tía.
        </p>
        <p>
          <strong>– Hợp chất của Na⁺:</strong> cháy với ngọn lửa màu vàng.
        </p>
        <p>
          <strong>– Hợp chất của K⁺:</strong> cháy với ngọn lửa màu tím nhạt.
        </p>
        <p>
          <strong>– Hợp chất của Ba²⁺:</strong> cháy với ngọn lửa màu lục vàng
        </p>
        <p>
          <strong>– Hợp chất của Ca²⁺:</strong> cháy với ngọn lửa màu đỏ cam.
        </p>
        <p>
          Các màu sắc của các muối kim loại khi cháy được ứng dụng làm pháo hoa
        </p>
      </>
    ),
  },
  {
    title: "Màu sắc hợp chất chứa Iron (Fe)",
    description: (
      <>
        <p>
          <strong>– FeO:</strong> rắn, màu đen.
        </p>
        <p>
          <strong>– Fe₂O₃:</strong> rắn, màu đỏ gạch (là thành phần chính của gỉ
          sắt).
        </p>
        <p>
          <strong>– Fe₃O₄:</strong> rắn, màu đen.
        </p>
        <p>
          <strong>– FeS:</strong> kết tủa màu đen.
        </p>
        <p>
          <strong>– Fe(OH)₂:</strong> kết tủa trắng xanh.
        </p>
        <p>
          <strong>– Fe(OH)₃:</strong> kết tủa nâu đỏ.
        </p>
        <p>
          <strong>– Ferrocyanua ([Fe(CN)₆]⁴⁻) :</strong> màu vàng chanh.
        </p>
        <p>
          <strong>– Fericyanua ([Fe(CN)₆]³⁻) :</strong> màu đỏ cam.
        </p>
      </>
    ),
  },
  {
    title: "Màu sắc một số hợp chất Silver (Ag)",
    description: (
      <>
        <p>
          <strong>– AgCl:</strong> kết tủa màu trắng.
        </p>
        <p>
          <strong>– AgBr:</strong> kết tủa màu vàng nhạt (trắng ngà).
        </p>
        <p>
          <strong>– AgI:</strong> kết tủa màu vàng cam/vàng đậm.
        </p>
        <p>
          <strong>– Ag₂S:</strong> kết tủa màu đen (chất gây ra hiện tượng bạc
          bị xỉn màu).
        </p>
      </>
    ),
  },
  {
    title: "Màu sắc hợp chất chứa Copper (Cu)",
    description: (
      <>
        <p>
          <strong>– Cu₂O:</strong> chất rắn màu đỏ gạch.
        </p>
        <p>
          <strong>– CuO:</strong> chất rắn màu đen.
        </p>
        <p>
          <strong>– Cu(OH)₂:</strong> Cu(OH)2: kết tủa màu xanh lam.
        </p>
        <p>
          <strong>– CuSO₄:</strong> : tinh thể khan có màu trắng, tinh thể ngậm
          nước (CuSO₄⋅ 5H₂O) có màu xanh lam.
        </p>
        <p>
          <strong>– CuCl₂:</strong> tinh thể màu nâu, dung dịch có màu xanh lục
        </p>
      </>
    ),
  },
  {
    title: "Màu sắc một số hợp chất của Manganese (Mg)",
    description: (
      <>
        <p>
          <strong>– MnCl₂:</strong> tinh thể có màu hồng nhạt, dung dịch có màu
          xanh lục.
        </p>
        <p>
          <strong>– MnO₂:</strong> chất rắn màu đen.
        </p>
        <p>
          <strong>– KMnO₄:</strong> tinh thể màu tím sẫm (thuốc tím), dung dịch
          có màu tím.
        </p>
        <p>
          <strong>– MnSO₄:</strong> tinh thể màu đỏ nhạt.
        </p>
      </>
    ),
  },
  {
    title: "Màu sắc một số hợp chất Chromium (Cr)",
    description: (
      <>
        <p>
          <strong>– Cr₂O₃:</strong> chất rắn màu xanh lục thẫm.
        </p>
        <p>
          <strong>– Cr(OH)₃:</strong> kết tủa nhầy, màu lục xám.
        </p>
        <p>
          <strong>– CrO₄²⁻:</strong> dung dịch màu vàng.
        </p>
        <p>
          <strong>– Cr₂O₇²⁻:</strong> dung dịch màu da cam.
        </p>
        <p>
          <strong>– Crom(VI) oxide (CrO₃):</strong> chất rắn màu đỏ thẫm.
        </p>
      </>
    ),
  },
];

export const IonSubstance = [
  {
    title: "Ion không màu",
    description: (
      <>
        <p>Nhiều ion kim loại không có màu trong dung dịch nước:</p>
        <p>
          <strong>– Ion kim loại kiềm (Na⁺, K⁺, Li⁺…)</strong>
        </p>
        <p>
          <strong>– Ion kim loại kiềm thổ (Mg²⁺, Ca²⁺, Ba²⁺…)</strong>
        </p>
        <p>
          <strong>– Ion Aluminium (Al³⁺)</strong>
        </p>
        <p>
          <strong>– Ion Zinc (Zn²⁺)</strong>
        </p>
        <p>
          <strong>– Ion Silver (Ag⁺)</strong>
        </p>
      </>
    ),
  },
  {
    title: "Ion có màu (nhóm B)",
    description: (
      <>
        <p>
          <strong>– Ion Iron (II) (Fe²⁺):</strong> thường có màu lục nhạt.
        </p>
        <p>
          <strong>– Oxygen (O₂):</strong> khí không màu.
        </p>
        <p>
          <strong>– Ion Iron (III) (Fe³⁺):</strong> thường có màu vàng nâu.
          <br /> Khi có mặt ion thiocyanate (SCN⁻), ion Fe³⁺ tạo phức có màu đỏ
          máu rất đặc trưng.
        </p>
        <p>
          <strong>– Ion Copper (II) (Cu²⁺):</strong> thường có màu xanh lam.
        </p>
        <p>
          <strong>– Ion Chromium (III) (Cr³⁺):</strong> thường có màu lục.
        </p>
        <p>
          <strong>– Ion Manganese (II) (Mn²⁺):</strong> thường có màu xanh lục.
        </p>
        <p>
          <strong>– Ion Cobalt (II) (Co²⁺):</strong> thường có màu hồng hoặc
          xanh lục tùy thuộc vào độ hydrat hóa.
        </p>
      </>
    ),
  },
];

export const Precipitate = [
  {
    title: "Màu của một số kết tủa",
    description: (
      <>
        <table>
          <tr>
            <td>
              <strong>Hợp chất</strong>
            </td>
            <td>
              <strong>Công thức</strong>
            </td>
            <td>
              <strong>Trạng thái</strong>
            </td>
          </tr>
          <tbody>
            <tr>
              <td rowSpan="7" style={{ fontWeight: "bold" }}>
                Hydroxide
              </td>
              <td>Mg(OH)₂</td>
              <td>↓ trắng</td>
            </tr>
            <tr>
              <td>Zn(OH)₂</td>
              <td> ↓ trắng, tan trong kiềm dư </td>
            </tr>
            <tr>
              <td>Al(OH)₃</td>
              <td> ↓ keo trắng, tan trong kiềm dư </td>
            </tr>
            <tr>
              <td>Fe(OH)₂</td>
              <td> ↓ trắng xanh, hóa nâu ngoài không khí </td>
            </tr>
            <tr>
              <td>Fe(OH)₃</td>
              <td> ↓ nâu đỏ </td>
            </tr>
            <tr>
              <td>Cu(OH)₂</td>
              <td> ↓ xanh lam </td>
            </tr>
            <tr>
              <td>Cr(OH)₃</td>
              <td> ↓ vàng </td>
            </tr>
            <tr>
              <td rowSpan="13" style={{ fontWeight: "bold" }}>
                Muối
              </td>
              <td>CaCO₃, BaCO₃</td>
              <td> ↓ trắng, tan trong axit mạnh </td>
            </tr>
            <tr>
              <td>BaSO₄</td>
              <td> ↓ trắng, không tan trong axit </td>
            </tr>
            <tr>
              <td>BaCrO₄</td>
              <td> ↓ vàng chanh, không tan trong axit </td>
            </tr>
            <tr>
              <td>CuS, PbS, Ag₂S</td>
              <td> ↓ đen, không tan trong axit </td>
            </tr>
            <tr>
              <td>FeS</td>
              <td> ↓ đen, tan trong axit </td>
            </tr>
            <tr>
              <td>ZnS</td>
              <td> ↓ trắng, tan trong axit </td>
            </tr>
            <tr>
              <td>CdS</td>
              <td> ↓ vàng </td>
            </tr>
            <tr>
              <td>MnS</td>
              <td> ↓ hồng </td>
            </tr>
            <tr>
              <td>HgS</td>
              <td> ↓ đỏ </td>
            </tr>
            <tr>
              <td>AgCl</td>
              <td> ↓ trắng </td>
            </tr>
            <tr>
              <td>AgBr</td>
              <td> ↓ vàng nhạt </td>
            </tr>
            <tr>
              <td>AgI</td>
              <td> ↓ vàng đậm </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
];
