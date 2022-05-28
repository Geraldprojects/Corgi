import "../../App.css";
interface Props {
  Title: string;
  Icon: any;
}

export const MenuItem = ({ Title, Icon }: Props) => {
  return (
    <div className="MenuItems">
      <Icon className="menuIcon" />
      <h2 className="MenuTitle">{Title}</h2>
    </div>
  );
};
