
import { layout,main } from 'Styles/Layouts.less';
import { Left,Right,Header } from 'Components/Layouts';


function BasicLayout({children,location:{pathname}}) {
  if(pathname === '/login'){
    return (
      <div className={layout}>
        { children }
      </div>
    );
  }
  return (
    <div>
      <Left/>
      <Right>
        <Header/>
        <div className={main}>
          { children }
        </div>
      </Right>
    </div>
  );
}

export default BasicLayout;
