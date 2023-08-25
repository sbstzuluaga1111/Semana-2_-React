import './ExpenseItem.css'

function ExpenseItem(props) {

    const months = props.date.toLocaleDateString('en-US',{month: 'long'})
    const day = props.date.toLocaleDateString('en-US',{day: '2-digit'})
    const year = props.date.getFullYear('en-US',{month: 'long'})

    return (
      
        <div className="blog-card spring-fever">
        <img className="blog-card" src={props.image}></img>
        <div className="title-content">
          <h3><a href="#">{props.title}</a></h3>
          <div className="intro"> <a href="#">{props.des}</a> </div>
        </div>
        <div className="card-info">
          {props.amount}$
          <a href="#">Add to Cart<span class="licon icon-arr icon-black"></span></a>
        </div>
        <div className="utility-info">
          <ul className="utility-list">
            <li><span className="licon icon-like"></span><a href="#">2</a></li>
            <li><span className="licon icon-com"></span><a href="#">12</a></li>
            <li><span className="licon icon-dat a"></span>
            <div className="a">
              {months}-
            </div>
            <div className="a">
            {year}-
            </div>
            <div className="a">
            {day}
            </div>
            </li>
            <li><span className="licon icon-tag"></span><a href="#">Photos</a>, <a href="#">Nice</a></li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div>
);
}

export default ExpenseItem;