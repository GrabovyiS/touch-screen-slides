import "./DescriptionSlider.css";
import spermUrl from "../../assets/sperm.png";

import { useState } from "react";

function DescriptionSlider(animated) {
  let initialCursorY;

  // the position of the scroller should be stored in the state to
  const [scrollPercentage, setScrollPercentage] = useState("0");

  const followMouse = (e) => {
    e.preventDefault();
  };

  const startFollowing = (e) => {
    initialCursorY = e.targetTouches[0].pageY;
    e.target.addEventListener("touchmove", followMouse);
  };

  const endFollowing = (e) => {
    e.target.removeEventListener("touchmove", followMouse);
  };

  return (
    <div className="slide description-slide">
      <img
        src={spermUrl}
        alt=""
        className={"sperm sperm1 " + (animated ? "animated" : "")}
      />
      <img
        src={spermUrl}
        alt=""
        className={"sperm sperm2 " + (animated ? "animated" : "")}
      />
      <img
        src={spermUrl}
        alt=""
        className={"sperm sperm3 " + (animated ? "animated" : "")}
      />
      <img
        src={spermUrl}
        alt=""
        className={"sperm sperm4 " + (animated ? "animated" : "")}
      />
      <img
        src={spermUrl}
        alt=""
        className={"sperm sperm5 " + (animated ? "animated" : "")}
      />
      <div className="content">
        <p className="subheading">
          Текст <br /> сообщения
        </p>
        <div className="text-scroll-container">
          <div
            onTouchStart={startFollowing}
            onTouchEnd={endFollowing}
            className="scroll"
          >
            <div className="scroller"></div>
          </div>
          <p className="scroll-text">
            <b>Lorem ipsum dolor, sit amet</b> consectetur adipisicing elit.
            Aliquid reiciendis illum totam architecto aspernatur nisi veritatis
            fuga numquam sint deserunt! Possimus beatae non ea reprehenderit
            suscipit, id dolorem quas neque quaerat, consequuntur quos, iste
            aliquam quis eius tenetur. Voluptatibus quasi delectus quaerat harum
            quas voluptate eveniet mollitia assumenda quisquam nisi repellat,
            corrupti qui officiis minus doloremque illo soluta molestias iusto
            sapiente! Maiores molestias, praesentium iure vitae optio voluptate
            rem consequuntur, ipsam quaerat, enim earum numquam. Incidunt
            aliquam quos provident iste et quisquam numquam atque recusandae,
            placeat nulla cupiditate earum aspernatur ipsum ratione facere
            dolores quis distinctio. Repellat alias, aliquid consequatur, id
            magni ullam veritatis, eaque enim doloremque dignissimos excepturi
            nostrum omnis! Atque ut optio distinctio. Nisi consectetur quia
            officiis velit ut reprehenderit exercitationem. Eum provident optio
            debitis asperiores fugit. Minima deserunt repudiandae ipsum expedita
            enim iusto velit sunt facere quas tenetur, consequuntur amet sequi
            provident maiores similique ullam fuga atque accusamus eius
            corrupti, incidunt temporibus nihil! Ad voluptatem, numquam
            perspiciatis aliquid libero distinctio. Officia fuga ducimus earum
            accusamus ullam eum tempora quo deleniti voluptate veritatis
            sapiente vero ut blanditiis maiores eius obcaecati, ea placeat illo
            temporibus incidunt, impedit quaerat et odit consectetur.
            Reprehenderit reiciendis velit dignissimos ipsum necessitatibus
            iusto consectetur modi, quas facilis earum dolores. Cupiditate cum
            architecto nulla dolorem maxime aliquid atque! Optio, suscipit ipsa
            deleniti consectetur reiciendis numquam voluptas quidem aut quos!
            Vel nostrum eius unde? Ratione, aspernatur. Officia dolorem minima
            fuga rem odio fugiat nulla quae, voluptatum quisquam dolores, est
            qui veritatis doloremque, maxime corporis soluta excepturi fugit
            quam deserunt provident illum ex a rerum? Officia nisi id, harum
            sint, tenetur odio quae fugiat voluptatem facere maxime cum vel
            dignissimos totam adipisci ullam fugit! Minus deserunt perferendis
            ullam neque eaque laboriosam quas mollitia nemo suscipit. Ut soluta
            quasi, similique incidunt praesentium alias quos, cum facere impedit
            eligendi sed vero facilis vel sunt voluptatum exercitationem esse
            doloremque sit? Omnis doloribus officiis illo expedita libero sed
            quis odio nam architecto dicta at, accusantium sunt reprehenderit
            temporibus nostrum ea dolor sint harum sapiente neque vero ducimus
            ipsa consectetur velit! Ratione facilis saepe, impedit recusandae
            accusamus est, magnam consequuntur sequi ea quidem consectetur
            aspernatur nam. Vitae corrupti sit fugiat facilis dicta velit quis
            est incidunt laborum quaerat quia debitis exercitationem repudiandae
            facere possimus blanditiis sed minus culpa hic ut molestias quisquam
            amet, porro repellendus! Nobis quaerat facere voluptatum obcaecati
            reiciendis consequatur reprehenderit ex voluptatem. Animi eos odit
            quis ab laudantium. At explicabo officia doloremque voluptas cumque
            porro, fugit iure culpa obcaecati corrupti ex ullam veniam nemo
            tenetur repellendus voluptatibus magnam iste voluptates temporibus
            ut! At excepturi quas eaque aliquid incidunt enim, voluptates, nulla
            nesciunt quia dicta odit aliquam ratione doloremque quaerat ea fugit
            animi dolore iure alias? Cupiditate labore ratione dignissimos
            repellat nulla, excepturi sit, vel voluptatem accusamus optio
            eveniet in non perspiciatis asperiores mollitia natus ullam corporis
            libero beatae praesentium quam aperiam blanditiis. Mollitia nihil,
            quae blanditiis earum iste ut asperiores pariatur, qui vero
            excepturi, perferendis cum error eaque similique praesentium
            adipisci. Voluptates sint nisi natus dolore quae, id quidem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSlider;
