// components/Staff.js
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Staff() {
  const t = useTranslations('staff');

  const staffMembers = [
    { id: 'mai', img: '/images/st01.jpg' },
    { id: 'youko', img: '/images/st02.jpg' },
    { id: 'daisuke', img: '/images/st03.jpg' }
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h5 className="mb-12 font-semibold leading-5 text-center text-xl">
          {t('title')}
        </h5>
        <div className="flex justify-center">
          <div className="grid max-w-2xl gap-8 row-gap-10">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="flex flex-col max-w-full sm:flex-row">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-32 h-32 mb-4 rounded-full">
                    <Image
                      src={staff.img}
                      alt={t(`${staff.id}.title`)}
                      width={500}
                      height={500}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    {t(`${staff.id}.title`)}
                  </h6>
                  <p className="mb-3">
                    {t(`${staff.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}