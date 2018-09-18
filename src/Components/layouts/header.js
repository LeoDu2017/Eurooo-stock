import { connect } from 'dva';

const HeaderLayout = ({ msg }) => (<div> { msg } </div>);

function mapStateToProps(){
  const msg = '我是头部';
  return { msg }
}

export default connect(mapStateToProps)(HeaderLayout)
