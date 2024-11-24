import { GalleryAdd } from "@/assets";
import { GreenButton } from "@/components/green-button";
import { api } from "@/libs/api";
import { useAuthStore } from "@/store/auth";
import {
  CreateThread,
  createThreadSchema,
} from "@/utils/schemas/thread/create-thread";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export function CreatePost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuthStore();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit } = useForm<CreateThread>({
    mode: "onSubmit",
    resolver: zodResolver(createThreadSchema),
  });

  const { ref: fileRef, ...registerFile } = register("file");

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation<boolean, Error, CreateThread>({
    mutationKey: ["threads"],
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("content", data.content);
      formData.append("file", data.file[0]);

      try {
        const response = await api.post("/threads", formData);
        // Mengembalikan true jika respons sukses (status 200)
        return response.status === 200;
      } catch (error) {
        // Jika terjadi error, lempar error agar bisa ditangani di onError
        throw new Error("Post Thread Failed!");
      }
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'oopss...',
        text: 'Post Thread Failed!',
        confirmButtonColor: '#d33',
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Post Thread Success!',
        confirmButtonColor: '#3085d6',
      });
      queryClient.invalidateQueries({
        queryKey: ["threads"]
      });
    }
  });

  async function onSubmit(data: CreateThread) {
    await mutateAsync(data);
  }

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"20px"}
        w={"100%"}
        onClick={onOpen}
      >
        <Avatar src={user?.profile?.profilePicture} border={"2px solid white"} />
        <Text color={"brand.secondary.500"}>What is happening?!</Text>
        <Spacer />
        <Image src={GalleryAdd} w="24px" />
        <GreenButton disabled>Post</GreenButton>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={"white"} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody backgroundColor={"brand.background"}>
              <Box
                display={"flex"}
                paddingY={"50px"}
                gap="5px"
                alignItems={"center"}
              >
                <Avatar
                  src={user?.profile?.profilePicture}
                  border={"2px solid white"}
                />
                <Input
                  placeholder="What is happening?!"
                  color={"white"}
                  {...register("content")}
                />
              </Box>
              <Divider />
            </ModalBody>

            <ModalFooter backgroundColor={"brand.background"} display={"flex"}>
              <Input
                type="file"
                hidden
                ref={(e) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (inputFileRef as any).current = e;
                  fileRef(e);
                }}
                {...registerFile}
              />
              <Button
                variant={"ghost"}
                onClick={() => {
                  inputFileRef.current?.click();
                }}
              >
                <Image src={GalleryAdd} w="24px" />
              </Button>
              <Spacer />
              <GreenButton type="submit">{isPending ? "Loading..." : "Post"}</GreenButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
