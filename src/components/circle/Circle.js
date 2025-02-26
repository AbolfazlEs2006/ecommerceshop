import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// css
import "./circle.css";

export default function Circle({ title }) {
  return (
    <>
      <div className="circle">
        <FiberManualRecordIcon />
        <h3>{title}</h3>
      </div>
    </>
  );
}
