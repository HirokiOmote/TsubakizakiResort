import React, { Component } from 'react';
import styles from './SectionSecond.scss';

export default class sectionSecond extends Component {
    render() {
        return (
            <article className={styles.SectionSecond}>
                <h2 className={styles.Header}><img src="../assets/images/top/ttl_SecondMain.svg" alt="セカンドライフ"/></h2>
                <article className={styles.containerFirst}>
                    <h3><img src="../assets/images/top/ttl_Second001.svg" alt=""/></h3>
                    <p>椿崎リゾートには年代も出身もさまざまな住人がいます。この地を気に入った理由を尋ねると、「リゾートとして開発した土地のため、昔からあるコミュニティに入る煩わしさがない」、「山も海も近いので、ガーデニング、畑での野菜づくり、釣りなど趣味三昧ができる」といった答えが返ってきました。リタイア後の田舎暮らし、のびのびと子育て、休日のリフレッシュ。暮らし方はそれぞれですが、皆さん自然豊かな椿崎リゾートで理想のスローライフを実践しています。</p>
                </article>
                <article className={styles.container}>
                    <div className={styles.image}><img src="../assets/images/top/img_Second001.jpg" alt=""/></div>
                    <div className={styles.txtCol}>
                        <header>
                            <h2><img src="../assets/images/top/ttl_Second002.svg" alt=""/></h2>
                            <p>移住歴10年　山崎義則・珠枝さん</p>
                        </header>
                        <p>定年後、22年間暮らした神奈川県から移住した山崎さん。海の近くで暮らしたい、大好きな釣りを思い切り楽しみたいという夢をかなえる場所を探してたどり着いたのが椿崎でした。「箱根や伊豆、下田、軽井沢など、思いつく別荘地はすべて見に行きましたが、ここは見学に行ったどの別荘地よりもきちんと管理されていて、管理事務所には人が常駐している。安心も元気で暮らせる大切な要素だと思います」。理想のセカンドライフ実現法は、気持ちが充実できる場所を見つけることでした。</p>
                    </div>
                </article>
                <a className={styles.Btn} href="">別荘についてのお問い合わせはこちら</a>
                <ul className={styles.Slide}>
                    <li><img src="../assets/images/top/img_SecondSlide001.jpg" alt=""/></li>
                    <li><img src="../assets/images/top/img_SecondSlide002.jpg" alt=""/></li>
                    <li><img src="../assets/images/top/img_SecondSlide003.jpg" alt=""/></li>
                    <li><img src="../assets/images/top/img_SecondSlide004.jpg" alt=""/></li>
                    <li><img src="../assets/images/top/img_SecondSlide005.jpg" alt=""/></li>
                    <li><img src="../assets/images/top/img_SecondSlide006.jpg" alt=""/></li>
                </ul>
            </article>
        );
    }
}
