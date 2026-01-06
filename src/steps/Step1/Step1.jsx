import {ShapeChoice} from "../../components/ShapeChoice";
import shapes from "../../utils/constants/shapes.constants";

export const Step1 = ({pickShape}) => {
    const chooseShape = (shape) => () => {
        pickShape(shape)
    }

    return (
        <div
            className="bg-[url('./assets/images/bg-triangle.svg')] bg-[center_top_4rem] xs:bg-center bg-no-repeat
            bg-contain xs:bg-auto h-56 xs:h-[28rem] mt-32 xs:mt-6">
            <div className="flex justify-center space-x-20 pt-4">
                <ShapeChoice onClick={chooseShape(shapes.paper)} shape={shapes.paper}/>
                <ShapeChoice onClick={chooseShape(shapes.scissors)} shape={shapes.scissors}/>
            </div>
            <div className="flex justify-center pt-12 xs:pt-24 xs:pt-10">
                <ShapeChoice onClick={chooseShape(shapes.rock)} shape={shapes.rock}/>
            </div>

        </div>
    );
};