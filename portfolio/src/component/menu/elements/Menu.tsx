import ContactBtn from './ContactBtn';
import MenuItem from './MenuItem';

function Menu() {

    return (<>
        <MenuItem
            title={"About"}
            className="w-full rounded-full border border-white/10 px-6 py-4 uppercase tracking-[0.35em] hover:bg-white/10"
        />
        <MenuItem
            title={"Projects"}
            className="w-full rounded-full border border-white/10 px-6 py-4 uppercase tracking-[0.35em] hover:bg-white/10"
        />
        <MenuItem
            title={"Services"}
            className="w-full rounded-full border border-white/10 px-6 py-4 uppercase tracking-[0.35em] hover:bg-white/10"
        />
        <ContactBtn title={'Contact Me'} className="w-full justify-center" />
    </>);
}

export default Menu;