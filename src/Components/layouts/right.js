import { connect } from 'dva';

const RightLayout = ({ msg }) => (<div> { msg } </div>);

function mapStateToProps(){
  const msg = '我是右侧';
  return { msg }
}

export default connect(mapStateToProps)(RightLayout)
