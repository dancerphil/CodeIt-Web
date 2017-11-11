import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Analysis.less';

export default class Analysis extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <div className="jumbotron jumbotron-fluid no-margin-bottom">
          <div className="container">
            <h1 className="display-5 text-center">我们认为每个人都可以学习计算机编程</h1>
            <p className="lead">很多人往往会觉得编程很难，甚至比其他学科还要难。其实，它与其他学科一样：是知识，是工具，是我们需要学习的一种能力。任何学科都是给人一个机会去发现自己，探索世界，找到与世界的联系的能力。每个学科似乎彼此独立，但实际上相互交叉。</p>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <a href="class.html">
              <img className="card-img-top" src="image/classes.jpg" alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">教程</h4>
              <p className="card-text">丰富的在线资源以满足不同用户的需求，总有最适合你的。</p>
            </div>
          </div>
          <div className="card">
            <a href="#">
              <img className="card-img-top" src="image/problems.jpg" alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">练习</h4>
              <p className="card-text">庞大的题库不断提升你的能力，勤练带来进步。</p>
            </div>
          </div>
          <div className="card">
            <a href="discuss.html">
              <img className="card-img-top" src="image/discuss.jpg" alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">讨论</h4>
              <p className="card-text">在这里，成千上万的用户分享他们的想法，互相帮助。</p>
            </div>
          </div>
          <div className="card">
            <a href="studio.html">
              <img className="card-img-top" src="image/studio.jpg" alt="Card cap" />
            </a>
            <div className="card-body">
              <h4 className="card-title text-center">工作室</h4>
              <p className="card-text">用最便捷的方法把你的思想变成现实，随时随地，轻松写代码。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
