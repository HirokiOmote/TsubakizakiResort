import React, { Component } from 'react';
import styles from './SectionDream.scss';

export default class sectionDream extends Component {
    render() {
        return (
            <article className={styles.Section}>
                <h2 className={styles.Header}><img src="../assets/images/top/ttl_DreamMain.svg" alt="セカンドライフ"/></h2>
                <article className={styles.First}>
                    <div className={styles.container}>
                        <div className={styles.Image}>
                            <img src="../assets/images/top/img_Dream.jpg" alt=""/>
                        </div>
                        <div className={styles.Txt}>
                            <h3><img src="../assets/images/top/ttl_Dream001.svg" alt=""/></h3>
                            <p>椿崎リゾートでは、夢を持つ人をサポートするプロジェクトを立ち上げました。土地の無償提供(※)や仕入れ先のご相談、広告のサポートなど、アナタと一緒に夢を実現させるお手伝いを致します。１日１組限定のレストランや民宿、海で見つけた貝殻や、豊かな山の素材で作品を作る工房や雑貨屋さん。椿崎は田舎だけれど、田舎だから叶えられる夢があります。ぜひ一度お問い合わせください。<br />※各種条件がございます。詳細はお問い合わせください。</p>
                        </div>
                    </div>
                    <a className={styles.Btn} href="">出店についてのお問い合わせはこちら</a>
                </article>
                <div className={styles.imgMap}><img src="../assets/images/top/img_Map.png" alt=""/></div>
                <div className={styles.containerMap}>
                    <article>
                        <h3><img src="../assets/images/top/ttl_Dream002.svg" alt=""/></h3>
                        <p>穴水町の中心部から車で約15分。椿崎リゾートは緑深い山と波静かな海に囲まれた場所にあります。穴水町は金沢市と能登半島を結ぶ能登里山街道の終点。平成25年に、通行料が全線無料となりますます便利に！能登の玄関口ともいえるのが穴水町です。能登空港からも車で１０分ほどという便利な立地。そして平成27年3月、ついに北陸新幹線が開業し、これまで4時間前後かかっていた金沢⇔東京間が2時間30分に大幅に短縮され、首都圏へのアクセスがより一層快適になりました。</p>
                        <p className={styles.route}><img src="../assets/images/top/img_MapRoute.png" alt=""/></p>
                    </article>
                    <article>
                        <h3><img src="../assets/images/top/ttl_Dream003.svg" alt=""/></h3>
                        <p>椿崎リゾートは、昭和46年に名相開発株式会社が開発したリゾート地です。当時から一貫して名相開発株式会社が管理しております。全国の「リゾート地」と呼ばれる場所は多数ありますが、実は管理事務所に常に人が常駐しているところは多くありません。何かあった時に管理者がいない不安。そんな思いはさせたくないと、名相開発株式会社では常にスタッフがいます。いざという時頼れる誰かがいる、という安心感は大きな違いです。</p>
                        <table>
                            <caption>管理会社案内</caption>
                            <tbody>
                                <tr>
                                    <th>商　号</th>
                                    <td>名相開発株式会社</td>
                                </tr>
                                <tr>
                                    <th>設　立</th>
                                    <td>昭和42年5月</td>
                                </tr>
                                <tr>
                                    <th>代表者</th>
                                    <td>代表取締役　深見朝子</td>
                                </tr>
                                <tr>
                                    <th>資本金</th>
                                    <td>1,000万円</td>
                                </tr>
                                <tr>
                                    <th>管理事務所所在地</th>
                                    <td>〒927-0007
                                        石川県鳳珠郡穴水町字岩車9-9-27
                                    </td>
                                </tr>
                                <tr>
                                    <th>TEL</th>
                                    <td>0768-56-1600</td>
                                </tr>
                                <tr>
                                    <th>FAX</th>
                                    <td>0768-56-1602</td>
                                </tr>
                                <tr>
                                    <th>事業内容</th>
                                    <td>不動産業務一般、土地分譲、住宅販売、リゾート開発</td>
                                </tr>
                                <tr>
                                    <th>宅建番号</th>
                                    <td>石川県（1）3839号</td>
                                </tr>
                                <tr>
                                    <th colSpan="2">沿　革</th>
                                </tr>
                                <tr>
                                    <td>昭和46年</td>
                                    <td>椿崎リゾート第1期分譲開始<br />以降第2～5期順次分譲</td>
                                </tr>
                                <tr>
                                    <td>平成 2年</td>
                                    <td>椿崎リゾート第6期分譲開始</td>
                                </tr>
                                <tr>
                                    <td>平成 7年</td>
                                    <td>椿崎リゾート第7期分譲開始</td>
                                </tr>
                                <tr>
                                    <td>平成18年</td>
                                    <td>椿崎リゾート第8期分譲開始</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </div>
                <a href="#" className={styles.Btn}>そのほか全てのお問い合わせはこちら</a>
            </article>
        );
    }
}
