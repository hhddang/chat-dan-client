import { useContext, useState } from "react";
import { Button, Section, SubTitle, SwipeView } from "./SubComponent";
import { AppContext } from "../../context";
import { USER_COLOR_PALETTE } from "./data";

interface InfoMenuProps {
  roomLink: string;
  order: number;
}

export function InfoMenu({ order, roomLink }: InfoMenuProps) {
  const { userName } = useContext(AppContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userList, setUserList] = useState<string[]>([
    'Adam Aquasthi Lee',
    'Evela Meh',
    'Huynh Dai Den',
    'Kaquamim Nuasly',
    'Nguyen Thi Thu Thuy',
    'Bui Duc Thai Vi Khang',
    'Adam Aquasthi Lee',
    'Evela Meh',
    'Huynh Dai Den',
    'Kaquamim Nuasly',
    'Salala Lee'
  ]);

  const copyLink = () => {
    navigator.clipboard.writeText(roomLink);
  };

  // const addUser = (user: string) => {
  //   setUserList([...userList, user]);
  // };

  return (
    <Section order={order}>
      <SubTitle text="Room Link" />
      <div className="flex gap-[10px] md:gap-[20px] flex-col md:flex-row items-center">
        <span className="text-center md:text-start italic py-[5px] min-w-[300px] max-w-full whitespace-nowrap overflow-scroll scrollbar-none">{roomLink}</span>
        <Button onClick={() => copyLink()}>Copy</Button>
      </div>

      <SubTitle text="Members" />
      <SwipeView style="max-h-[350px]">
        <Button isText style="w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">You ({userName})</Button>
        {userList.map((user, index) => (
          <Button key={index} isText style="w-[200px] overflow-hidden text-ellipsis whitespace-nowrap" color={USER_COLOR_PALETTE[index % USER_COLOR_PALETTE.length]} >{user}</Button>
        ))}
      </SwipeView>
    </Section >
  );
}
