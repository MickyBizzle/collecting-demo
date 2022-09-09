import { StyledBaseTemplate } from './BaseTemplate.style';
import { BaseTemplateType } from './BaseTemplate.type';

const BaseTemplate: React.FC<BaseTemplateType> = ({ sampleTextProp }) => (
  <StyledBaseTemplate>{sampleTextProp}</StyledBaseTemplate>
);

export default BaseTemplate;
