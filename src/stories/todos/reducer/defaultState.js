export default {
    favorite: {
        list: {
            items: [],
            pending: false,
            totalCount: 0,
            totalPages: 0,
            query: {
                count: 27,
                page: 1,
            },
        },
    },
    ourExperts: {
        query: {
            specialities: [''],
            subSpecialities: [''],
            languages: [''],
            rating: [''],
            gender: '',
            category: '',
            count: 28,
            page: 1,
        },
        items: [],
        pending: false,
        totalCount: 0,
        totalPages: 0,
    },
    informationOverview: {
        item: null,
        pending: false,
    },
    registration: {
        pending: false,
        pendingDiplomaUploading: false,
        pendingAvatarUploading: false,
        quick: {
            pending: false,
        },
        navBar: {
            tabs: [
                'generalInformation',
                'skills',
                // 'paymentMethods',
                'informationAboutYou',
                'review',
            ],
            activeTab: 'generalInformation',
        },
        controls: {
            specialities: [],
            languages: [],
            countries: [],
        },
        data: {
            generalInformation: {
                firstName: null,
                lastName: null,
                email: null,
                country: null,
                city: null,
                phoneNumber: null,
                hourlyRate: null,
                minDuration: null,
                maxDuration: null,
                birthDateDay: null,
                birthDateMonth: null,
                birthDateYear: null,
                gender: 'male',
                filledIn: false,
            },
            skills: {
                specialities: [],
                subSpecialities: [],
                languages: [],
                filledIn: false,
            },
            /*paymentMethods: {
                accountHoldersName: null,
                bankName: null,
                iban: null,
                swiftCode: null,
                bankAccountNumber: null,
                bankAddress: null,
                filledIn: false,
            },*/
            informationAboutYou: {
                description: null,
                filledIn: false,
            },
            review: {
                agreeTermsAndConditions: false,
            },
            diplomas: [],
            profileImage: null,
        },
    },
};
