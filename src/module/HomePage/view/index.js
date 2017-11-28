import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';
import Part from '../../../components/Layout/Part';

@connect()
export default class HomePage extends Component {
  handleClick = href => () => {
    this.props.dispatch({
      type: 'router/set',
      payload: href,
    });
  }
  render() {
    return (
      <div>
        <img src={require('../assets/home-page-cover.jpg')} alt="" width="100%" />
        <div className="jumbotron jumbotron-fluid m-0">
          <div className="container">
            <h4 className="text-center">每个人都可以学习计算机编程</h4>
            <p>很多人往往会觉得编程很难，甚至比其他学科还要难。其实，它与其他学科一样：是知识，是工具，是我们需要学习的一种能力。任何学科都是给人一个机会去发现自己，探索世界，找到与世界的联系的能力。每个学科似乎彼此独立，但实际上相互交叉。</p>
          </div>
          <br />
          <br />
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="container">
                  <img className="m-4" src={require('../assets/courses.svg')} alt="" width="64px" height="64px" />
                  <h5>丰富的在线资源</h5>
                  <small>我们提供了丰富的在线资源，保证用户能够找到最适合自己的教程。每门课程都合理地划分了不同的章节，循序渐进。
                            同时还配有相应的测试题，以供巩固知识。相信你一定能够享受学习的乐趣，并且得到提升。
                  </small>
                </div>
              </div>
              <div className="col">
                <div className="container">
                  <img className="m-4" src={require('../assets/communication.svg')} alt="" width="64px" height="64px" />
                  <h5>方便的交流平台</h5>
                  <small>
                            如果你在学习的过程中遇到任何问题，不用烦恼，你随时可以将它发表到讨论区，让其他人来解决你的疑惑。当然，如果你写出了漂亮的代码，你也可以将它与众人分享。毕竟，授人玫瑰，手有余香。
                  </small>
                </div>
              </div>
              <div className="col">
                <div className="container">
                  <img className="m-4" src={require('../assets/guidance.svg')} alt="" width="64px" height="64px" />
                  <h5>细心的真人指导</h5>
                  <small>
                            尽管强大的自学能力是一个优秀的程序员必备的素质，但是我们仍然真诚地希望给你最大程度地帮助。尤其对于新手来说，我们有贴心的在线一对一真人指导服务，任何时候，你都可以预约到你想要的老师，为你排忧解难。
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Part className="p-5" style={{ backgroundColor: '#08ABA6' }}>
          <div className="container text-center text-white">
            <h3><strong>他们</strong>都<strong>说</strong>过什么</h3>
          </div>
          <div className="container text-center mt-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                <li data-target="#carouselExampleIndicators" data-slide-to="2" />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item mb-5 active">
                  <small className="text-white">我认为对象就像是生物学里的细胞，或者网络中的一台计算机，只能够通过消息来通信。
                  </small>
                  <br />
                  <br />
                  <img className="rounded-circle" src={require('../assets/Alan-Kay.jpg')} alt="" width="100px" height="100px" />
                  <br />
                  <p className="text-white font-weight-bold lead">Alan Kay</p>
                  <small className="text-light">面向对象之父</small>
                  <br />
                </div>
                <div className="carousel-item mb-5">
                  <small className="text-white">控制复杂性是计算机编程的本质。</small>
                  <br />
                  <br />
                  <img className="rounded-circle" src={require('../assets/Brian-Kernighan.jpg')} alt="" width="100px" height="100px" />
                  <br />
                  <p className="text-white font-weight-bold lead">Brian Kernighan</p>
                  <small className="text-light">Unix的主要贡献者</small>
                  <br />
                </div>
                <div className="carousel-item mb-5">
                  <small className="text-white">计算机科学领域的所有问题都可以通过其他方式间接解决。</small>
                  <br />
                  <br />
                  <img className="rounded-circle" src={require('../assets/David-Wheeler.jpg')} alt="" width="100px" height="100px" />
                  <br />
                  <p className="text-white font-weight-bold lead">David Wheeler</p>
                  <small className="text-light">计算机科学的先驱</small>
                  <br />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </Part>
      </div>
    );
  }
}
