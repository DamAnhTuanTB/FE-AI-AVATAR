import {styled} from "styled-components";
import {Modal} from "antd";
import {breakpoints} from "@/config/breakpoints";

export const CustomModalWrapper = styled(Modal)`
  .ant-modal{
    @media screen and (max-width: ${breakpoints.sm}) {
      margin: 16px auto;
    }
  }

 
  .ant-modal-content {
    border-radius: 12px;
    height: 100%;
    position: relative;

    .ant-modal-body {
      height: 100%;
      padding: 32px 24px;
      border-radius: 12px;
      background: #FFF;

      @media screen and (max-width: ${breakpoints.sm}) {
        padding: 48px 24px;
      }

      .close-icon-wrapper {
        position: absolute;
        top: -10px;
        right: -12px;
        cursor: pointer;
        
        @media screen and (max-width: ${breakpoints.sm}) {
          right: -7px;
        }
      }

      .modal-wrapper {
        height: calc(100% - 32px - 32px);
        display: flex;
        gap: 24px;
        
        @media screen and (max-width: ${breakpoints.lg}) {
          align-items: center;
          justify-content: center;
        }

        .ant-checkbox-wrapper:hover .ant-checkbox:after, .ant-checkbox:hover:after {
            border: none;
        }
        .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus+.ant-checkbox-inner {
          border-color: #F6C447;
        }
        

        .children-wrapper {
          max-width: 400px;
          width: 100%;
        }

        .background-wrapper {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          
          @media screen and (max-width: ${breakpoints.lg}) {
            display: none;
          }

          .background {
            max-width: 469px;
            max-height: 461px;

            img {
              width: 100%;
              height: 100%;
            }
          }


        }
      }
    }
  }
`
