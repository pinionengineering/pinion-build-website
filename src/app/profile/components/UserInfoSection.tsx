'use client';

interface AuthUser {
  accessToken: string;
  refreshToken?: string;
  profile: {
    sub: string;
    name?: string;
    email?: string;
    picture?: string;
  };
}

interface UserInfoSectionProps {
  user: AuthUser;
}

export default function UserInfoSection({ user }: UserInfoSectionProps) {
  const { profile } = user;

  return (
    <section className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>

      <div className="flex items-start space-x-4">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          {profile.picture ? (
            <img
              src={profile.picture}
              alt={profile.name || 'Profile'}
              className="w-20 h-20 rounded-full border-2 border-blue-500"
            />
          ) : (
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-500">
              <span className="text-white text-3xl font-bold">
                {profile.name?.charAt(0)?.toUpperCase() ||
                 profile.email?.charAt(0)?.toUpperCase() ||
                 'U'}
              </span>
            </div>
          )}
        </div>

        {/* User Details */}
        <div className="flex-1">
          {profile.name && (
            <div className="mb-3">
              <label className="text-sm text-slate-400">Name</label>
              <p className="text-lg text-white">{profile.name}</p>
            </div>
          )}

          {profile.email && (
            <div className="mb-3">
              <label className="text-sm text-slate-400">Email</label>
              <p className="text-white">{profile.email}</p>
            </div>
          )}

          <div>
            <label className="text-sm text-slate-400">User ID</label>
            <p className="text-xs text-slate-500 font-mono">{profile.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
