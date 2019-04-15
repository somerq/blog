import styled from 'styled-components';
import {v} from '../../lib/styleUtils';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${v('30px')};
  padding-top: ${v('110px')};
  box-sizing: border-box;
`
export const NoData = styled.div`
  width: 100%;
  border: ${v('2px')} solid #ddd;
  border-radius: ${v('4px')};
  padding: ${v('20px')};
  margin: ${v('20px')} auto;
  box-sizing: border-box;
  text-align: center;
`

export const PageContent = styled.div`
  border: ${v('2px')} solid #ddd;
  border-radius: ${v('8px')};
  padding: ${v('30px')};
  margin: ${v('20px')} auto;
  box-sizing: border-box;
  .title {
    text-align: center;
    padding: ${v('10px')};
  }
  .content {
    line-height: ${v('36px')};
    margin: ${v('20px')} 0;
    padding: ${v('20px')};
    img, iframe {
      max-width: 95%!important;
    }
    code {
      word-break: break-all;
      word-wrap: break-word;
      white-space: pre-line;
    }
  }
  .info {
    font-size: ${v('12px')};
    text-align: center;
    padding: ${v('10px')};
    border-bottom: ${v('2px')} solid #ddd;
    height: ${v('30px')};
    line-height: ${v('30px')};
  }
`