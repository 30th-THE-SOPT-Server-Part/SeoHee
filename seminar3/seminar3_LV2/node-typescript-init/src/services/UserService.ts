import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserCreateDto} from "../interfaces/user/UserCreateDto";
import { UserResponseDto } from "../interfaces/user/UserResopnseDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import User from "../models/User";

const createUser = async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto> => {
    try{
        const user = new User({
            name: userCreateDto.name,
            phone: userCreateDto.phone,
            email: userCreateDto.email,
            age: userCreateDto.age,
            school: userCreateDto.school,
        }); // document 만들기

        await user.save();

        const data ={
            _id: user.id
        };

        return data;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async(userId: string, userUpdateDto: UserUpdateDto) => {
    try{
        //findByIdAndUpdate 함수 사용
        await User.findByIdAndUpdate(userId, userUpdateDto);
    } catch (error){
        console.log(error);
        throw error;
    }
}

const findUserById = async(userId: string): Promise<UserResponseDto | null> => {
    try{
        const user = await User.findById(userId);

        if(!user){
            return null;
        }

        return user;
    }catch (error){
        console.log(error);
        throw error;
    }
}

const deleteUser = async(userId: string): Promise<void> => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error){
    console.log(error);
    throw error;
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    deleteUser
}
