import tw from 'twin.macro';

const ProfileSkeleton = () => {
  return (
    <div tw="p-6 bg-gray-900 rounded-md">
      <div tw="animate-pulse">
        {/* Character Name */}
        <div tw="h-10 flex items-center mb-4 space-x-4">
          <div tw="w-28 py-1 bg-slate-600 rounded-md"></div>
          <div tw="flex-1 py-1 bg-slate-600 rounded-md"></div>
        </div>
        {/* About Me */}
        <div tw="mt-4">
          {/* Heading */}
          <div tw="h-4 grid items-center mb-1">
            <div tw="py-1 w-20 bg-slate-600 rounded-md"></div>
          </div>
          {/* Attributes */}
          <div>
            <div tw="py-1.5 flex space-x-12 items-center">
              <div tw="py-1 w-32 bg-slate-600 rounded-md"></div>
              <div tw="py-1 w-32 bg-slate-600 rounded-md"></div>
            </div>
            <div tw="py-1.5 flex space-x-12 items-center">
              <div tw="py-1 w-32 bg-slate-600 rounded-md"></div>
              <div tw="py-1 w-32 bg-slate-600 rounded-md"></div>
            </div>
            <div tw="py-1.5 grid items-center">
              <div tw="py-1 w-32 bg-slate-600 rounded-md"></div>
            </div>
          </div>
        </div>
        {/* Films */}
        <div tw="mt-4">
          {/* Heading */}
          <div tw="h-4 grid items-center mb-1">
            <div tw="py-1 w-20 bg-slate-600 rounded-md"></div>
          </div>
          {/* Attributes */}
          <div>
            <div tw="py-1.5 grid items-center">
              <div tw="py-1 w-36 bg-slate-600 rounded-md"></div>
            </div>
            <div tw="py-1.5 grid items-center">
              <div tw="py-1 w-36 bg-slate-600 rounded-md"></div>
            </div>
            <div tw="py-1.5 grid items-center">
              <div tw="py-1 w-36 bg-slate-600 rounded-md"></div>
            </div>
            <div tw="py-1.5 grid items-center">
              <div tw="py-1 w-36 bg-slate-600 rounded-md"></div>
            </div>
            <div tw="py-1.5 grid items-center">
              <div tw="py-1 w-36 bg-slate-600 rounded-md"></div>
            </div>
            <div tw="py-1.5 grid items-center">
              <div tw="py-1 w-36 bg-slate-600 rounded-md"></div>
            </div>
          </div>
        </div>
        <div tw="mt-4">
          {/* Heading */}
          <div tw="h-4 grid items-center mb-1">
            <div tw="py-1 w-20 bg-slate-600 rounded-md"></div>
          </div>
          {/* Attributes */}
          <div>
            <div tw="py-1.5 flex space-x-4 items-center">
              <span tw="py-1 w-20 bg-slate-600 rounded-md"></span>
              <span tw="py-1 w-36 bg-slate-600 rounded-md"></span>
              <span tw="py-1 w-20 bg-slate-600 rounded-md"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
