import { SelectOverlay } from "../../overlays/SelectOverlay";
import { SelectWrapper } from "../../Wrappers/SelectWrapper";

interface PriceSelectProps {

}

export const PriceSelect: React.FC<PriceSelectProps> = ({}) => {
    return (<SelectWrapper>
      <SelectOverlay isActive={true} onClick={()=> {}}/> 
    </SelectWrapper>);
}