import NothingForShow from "@/components/modules/NothingForShow";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
   return (
      <div className="my-10">
         <NothingForShow
            title="404 | صفحه مورد نظر یافت نشد"
            textLink="بازگشت به صفحه اصلی"
            link="/"
            icon={<></>}
         />
      </div>
   );
};

export default NotFound;
