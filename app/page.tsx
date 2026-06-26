import Image from "next/image";

const supportAreas = [
  "健康・生活",
  "運動・感覚",
  "認知・行動",
  "言語・コミュニケーション",
  "人間関係・社会性"
];

const services = [
  {
    title: "児童発達支援",
    text: "未就学のお子さまの発達段階に合わせ、生活習慣や遊びの中で小さな成功体験を重ねられるよう支援します。"
  },
  {
    title: "放課後等デイサービス",
    text: "学校後や長期休みに安心して過ごせる居場所として、学習・遊び・集団活動をバランスよく行います。"
  },
  {
    title: "個別支援・集団活動",
    text: "一人ひとりの目標に沿った個別活動と、友だちとの関わりを育む集団活動を組み合わせます。"
  }
];

const galleryImages = [
  {
    src: "/images/activity-space.jpg",
    alt: "明るい活動スペースとマットのある室内",
    label: "広い活動スペース"
  },
  {
    src: "/images/play-area.jpg",
    alt: "遊具や収納が整った教室の様子",
    label: "遊びに使える空間"
  },
  {
    src: "/images/learning-room.jpg",
    alt: "机と棚が配置された清潔な室内",
    label: "学習に向いた環境"
  },
  {
    src: "/images/rest-space.jpg",
    alt: "落ち着いて過ごせる室内スペース",
    label: "休憩しやすい場所"
  }
];

const dailyFlow = [
  "来所",
  "健康確認",
  "個別活動",
  "集団活動",
  "片付け・帰りの準備",
  "ご帰宅"
];

const news = [
  "2026.04.01　ホームページを公開しました",
  "2026.04.01　見学・ご相談を受け付けています"
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="トップへ戻る">
          <span className="brandMark" aria-hidden="true">
            施
          </span>
          <span>施設名</span>
        </a>
        <nav className="siteNav" aria-label="ページ内メニュー">
          <a href="#top">トップ</a>
          <a href="#about">施設について</a>
          <a href="#services">サービス内容</a>
          <a href="#gallery">教室紹介</a>
          <a href="#flow">ご利用の流れ</a>
          <a href="#news">お知らせ</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
        <a className="headerCta" href="#contact">
          見学・ご相談
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            src="/images/classroom-hero.jpg"
            alt="明るく清潔な教室の室内写真"
            fill
            priority
            sizes="100vw"
            className="heroImage"
          />
          <div className="heroShade" aria-hidden="true" />
          <div className="heroContent">
            <p className="sectionLabel">児童発達支援・放課後等デイサービス</p>
            <h1 id="hero-title">
              お子さま一人ひとりに寄り添う、
              <span>安心できる居場所</span>
            </h1>
            <p className="heroText">
              発達段階や個性に合わせて、日々の生活・学び・コミュニケーションを丁寧にサポートします。
            </p>
            <div className="heroActions">
              <a className="button primary" href="#contact">
                見学を申し込む
              </a>
              <a className="button secondary" href="#services">
                サービス内容を見る
              </a>
            </div>
          </div>
        </section>

        <section className="section aboutSection" id="about" aria-labelledby="about-title">
          <div className="sectionInner aboutGrid">
            <div>
              <p className="sectionLabel">施設について</p>
              <h2 id="about-title">私たちの施設について</h2>
            </div>
            <p className="leadText">
              明るく清潔な環境の中で、お子さまが安心して過ごせる空間づくりを大切にしています。遊びや日常生活の活動を通じて、できることを少しずつ増やしていけるよう支援します。
            </p>
          </div>
        </section>

        <section className="section supportSection" aria-labelledby="support-title">
          <div className="sectionInner">
            <div className="sectionHeading">
              <p className="sectionLabel">支援の視点</p>
              <h2 id="support-title">五つの領域を大切にした支援</h2>
              <p>
                日々の活動を通して、お子さまの生活力、身体の使い方、考える力、伝える力、人との関わりを育みます。
              </p>
            </div>
            <div className="supportGrid">
              {supportAreas.map((area) => (
                <article className="supportCard" key={area}>
                  <span aria-hidden="true" />
                  <h3>{area}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="sectionInner">
            <div className="sectionHeading">
              <p className="sectionLabel">サービス内容</p>
              <h2 id="services-title">お子さまとご家庭に合わせたサポート</h2>
            </div>
            <div className="serviceGrid">
              {services.map((service) => (
                <article className="serviceCard" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallerySection" id="gallery" aria-labelledby="gallery-title">
          <div className="sectionInner">
            <div className="sectionHeading">
              <p className="sectionLabel">教室紹介</p>
              <h2 id="gallery-title">明るく、清潔で、のびのび過ごせる空間</h2>
              <p>
                学習、遊び、休憩に使える場所を整え、お子さまが落ち着いて活動できる環境づくりを行っています。
              </p>
            </div>
            <div className="galleryGrid">
              <figure className="galleryLarge">
                <Image
                  src="/images/classroom-main.jpg"
                  alt="机とマットが配置された明るい教室全体"
                  fill
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
                <figcaption>明るい室内と清潔な環境</figcaption>
              </figure>
              <div className="gallerySmallGrid">
                {galleryImages.map((image) => (
                  <figure className="galleryItem" key={image.src}>
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 50vw, 22vw" />
                    <figcaption>{image.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section flowSection" id="flow" aria-labelledby="flow-title">
          <div className="sectionInner">
            <div className="sectionHeading">
              <p className="sectionLabel">ご利用の流れ</p>
              <h2 id="flow-title">一日の過ごし方</h2>
            </div>
            <ol className="flowList">
              {dailyFlow.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section newsSection" id="news" aria-labelledby="news-title">
          <div className="sectionInner newsGrid">
            <div>
              <p className="sectionLabel">お知らせ</p>
              <h2 id="news-title">お知らせ</h2>
            </div>
            <ul className="newsList">
              {news.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contactSection" id="contact" aria-labelledby="contact-title">
          <div className="sectionInner contactPanel">
            <div>
              <p className="sectionLabel">お問い合わせ</p>
              <h2 id="contact-title">見学・ご相談をご希望の方へ</h2>
              <p>
                施設の雰囲気や支援内容について、まずはお気軽にご相談ください。
              </p>
            </div>
            <div className="contactActions">
              <a className="button primary" href="mailto:info@example.jp">
                お問い合わせ
              </a>
              <a className="button secondary" href="mailto:info@example.jp?subject=見学申し込み">
                見学を申し込む
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="footerInner">
          <div>
            <p className="footerName">施設名</p>
            <p>〒000-0000 住所をご入力ください</p>
            <p>電話番号：000-0000-0000</p>
            <p>開所時間：平日 00:00〜00:00</p>
          </div>
          <a href="#top">プライバシーポリシー</a>
        </div>
      </footer>
    </>
  );
}
