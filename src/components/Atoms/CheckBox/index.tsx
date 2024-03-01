import { motion, useMotionValue, useTransform } from "framer-motion";
// import CheckboxIcon from '../Vectors/Checkbox'
// const Checkbox = ({handleChecked, checked}: {handleChecked:()=> void, checked:boolean}) => {
//   return (
//     <div className={`h-6 w-6 flex justify-center items-center rounded-sm ${checked? 'bg-primary': 'bg-gray-200'}`} onClick={handleChecked}>
//       {checked ? <CheckboxIcon/> : ''}
//     </div>
//   )
// }

// export default Checkbox

// const checkVariants = {
//   initial: {
//     color: "#fff",
//   },
//   checked: { pathLength: 1 },
//   unchecked: { pathLength: 0 },
// };

// const boxVariants = {
//   checked: {
//     background: "#646ff0",
//     transition: { duration: 0.1 },
//   },
//   unchecked: { background: "#dedfe1", transition: { duration: 0.1 } },
// };

// function CheckButton({ checked, handleCheck }: { checked: boolean }) {
//   const pathLength = useMotionValue(0);
//   const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

//   return (
//     <motion.div
//       animate={checked ? "checked" : "unchecked"}
//       className={` bg-primary h-6 w-6 flex justify-center items-center rounded-sm`}
//       variants={boxVariants}
//       onClick={() => handleCheck()}
//     >
//       <motion.svg
//         className={`w-full h-full stroke-white flex justify-center items-center`}
//         viewBox="0 0 53 38"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <motion.path
//           variants={checkVariants}
//           animate={checked ? "checked" : "unchecked"}
//           style={{ pathLength, opacity }}
//           fill="none"
//           strokeMiterlimit="10"
//           strokeWidth="6"
//           d="M1.5 22L16 36.5L51.5 1"
//           strokeLinejoin="round"
//           strokeLinecap="round"
//         />
//       </motion.svg>
//     </motion.div>
//   );
// }

// export default CheckButton;

import { SVGProps } from "react";

type checkIcon = {
  checked: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleChecked: Function;
}& SVGProps<SVGSVGElement>

const CheckButton = (props:checkIcon) => {
  const {handleChecked} = props
  const checkVariants = {
      initial: {
        color: "#fff",
      },
      checked: { pathLength: 1 },
      unchecked: { pathLength: 0 },
    };

    const boxVariants = {
      checked: {
        background: "#646ff0",
        transition: { duration: 0.1 },
      },
      unchecked: { background: "#dedfe1", transition: { duration: 0.1 } },
    };
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <>
      <motion.div
        animate={props.checked ? 'checked' : 'unchecked'}
        variants={boxVariants}
        className=" bg-primary h-6 w-6 flex justify-center items-center rounded-sm"
        onClick={()=> handleChecked()}
      >

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="rgba(255,255,255,1)"
          animate={props.checked ? 'checked' : 'unchecked'}
          variants={checkVariants}
        >
          <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" variants={checkVariants}
          animate={props.checked ? "checked" : "unchecked"}
          style={{ pathLength, opacity }}></path>
        </motion.svg>
      </motion.div>
    </>
  );
};
export default CheckButton;
