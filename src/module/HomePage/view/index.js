import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';
import Part from '../../../components/Layout/Part';

@connect()
export default class Analysis extends Component {
  handleClick = href => () => {
    this.props.dispatch({
      type: 'router/set',
      payload: href,
    });
  }
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid no-margin-bottom">
          <div className="container">
            <h1 className="display-5 text-center">我们认为每个人都可以学习计算机编程</h1>
            <p className="lead">很多人往往会觉得编程很难，甚至比其他学科还要难。其实，它与其他学科一样：是知识，是工具，是我们需要学习的一种能力。任何学科都是给人一个机会去发现自己，探索世界，找到与世界的联系的能力。每个学科似乎彼此独立，但实际上相互交叉。</p>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <a onClick={this.handleClick('courses')}>
              <img className="card-img-top" src={require('../assets/courses.svg')} alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">教程</h4>
              <p className="card-text">丰富的在线资源以满足不同用户的需求，总有最适合你的。</p>
            </div>
          </div>
          <div className="card">
            <a href="#">
              <img className="card-img-top" src={require('../assets/guidance.svg')} alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">练习</h4>
              <p className="card-text">庞大的题库不断提升你的能力，勤练带来进步。</p>
            </div>
          </div>
          <div className="card">
            <a href="discuss.html">
              <img className="card-img-top" src={require('../assets/communication.svg')} alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">讨论</h4>
              <p className="card-text">在这里，成千上万的用户分享他们的想法，互相帮助。</p>
            </div>
          </div>
          <div className="card">
            <a href="studio.html">
              <img className="card-img-top" src={require('../assets/studio-icon.svg')} alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">工作室</h4>
              <p className="card-text">用最便捷的方法把你的思想变成现实，随时随地，轻松写代码。</p>
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
