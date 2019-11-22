export interface IAppConfig {
    env: {
        name: string;
    };
    apiServer: {
        RegisterUserUrl: string;
        LoginUserUrl: string;
        UploadImageUrl: string;
        GetCurrentUserUrl: string;
        GetPhotoUrl: string;
        GetPotentialMatches: string;
        AddUserOperation: string;
    };
}