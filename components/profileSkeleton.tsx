import tw, { styled } from 'twin.macro';

const StyledSection = styled.div`
  ${tw`mt-4`},
`;
const StyledHeadingContainer = styled.div`
  ${tw`h-4 grid items-center mb-1`},
`;
const StyledShortLine = styled.div`
  ${tw`py-1 w-20 bg-slate-600 rounded-md`},
`;
const StyledAboutMeLine = styled.div`
  ${tw`py-1 w-32 bg-slate-600 rounded-md`},
`;
const StyledMediumLine = styled.div`
  ${tw`py-1 w-36 bg-slate-600 rounded-md`},
`;

const StyledAtrributes = styled.div`
  ${tw`py-1.5 flex items-center space-x-4`};
`;

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
        <StyledSection>
          {/* Heading */}
          <StyledHeadingContainer>
            <StyledShortLine />
          </StyledHeadingContainer>
          {/* Attributes */}
          <StyledAtrributes>
            <StyledAboutMeLine />
            <StyledAboutMeLine />
          </StyledAtrributes>
          <StyledAtrributes>
            <StyledAboutMeLine />
            <StyledAboutMeLine />
          </StyledAtrributes>
          <StyledAtrributes>
            <StyledAboutMeLine />
          </StyledAtrributes>
        </StyledSection>
        {/* Films */}
        <StyledSection>
          {/* Heading */}
          <StyledHeadingContainer>
            <StyledShortLine />
          </StyledHeadingContainer>
          {/* Attributes */}
          <StyledAtrributes>
            <StyledMediumLine />
          </StyledAtrributes>
          <StyledAtrributes>
            <StyledMediumLine />
          </StyledAtrributes>
          <StyledAtrributes>
            <StyledMediumLine />
          </StyledAtrributes>
          <StyledAtrributes>
            <StyledMediumLine />
          </StyledAtrributes>
          <StyledAtrributes>
            <StyledMediumLine />
          </StyledAtrributes>
          <StyledAtrributes>
            <StyledMediumLine />
          </StyledAtrributes>
        </StyledSection>
        <StyledSection>
          {/* Heading */}
          <StyledHeadingContainer>
            <StyledShortLine />
          </StyledHeadingContainer>
          {/* Attributes */}
          <StyledAtrributes>
            <StyledShortLine />
            <StyledMediumLine />
            <StyledShortLine />
          </StyledAtrributes>
        </StyledSection>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
